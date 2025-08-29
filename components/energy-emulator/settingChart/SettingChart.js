import {SettingChartStyled} from "../../styles/energy-emulator/setting-chart/SettingChartStyled";
import {ToastContainer, toast} from 'react-toastify';
import FeatureSetting from "./FeatureSetting";
import PowerTimeline from "./PowerTimeline";
import EnergyConsumption from "./EnergyConsumption";
import EnergyHarvesting from "./EnergyHarvesting";
import {useEffect, useMemo, useRef, useState} from "react";
import {computeEnergy, generatePowerSeries} from "../../../helper/power-utils";
import {convertTime} from "../../../helper/energy-helper";
import 'react-toastify/dist/ReactToastify.css';
import {KEY_CUSTOM_PRESET, LABEL_CUSTOM_PRESET} from "../../../constant/preset-key";
import swal from 'sweetalert';


const SettingChart = ({powerProfilesConfig, solarProfilesConfig, powerProfilesPreset}) => {
  const [feartureData, setFeartureData] = useState({});

  const [keyPresetData, setPresetKey] = useState({});

  const featureRef = useRef();

  const [isChangeData, setIsChangeData] = useState(false);



  const [timeUnit, setTimeUnit] = useState('ms');
  const energyConsumptionDataDefault = {id: Date.now(), stage: 'cpuActive', duration: 1, unit: 'ms', locked: false};
  const energyConsumptionDataDefaultLocked = {
    id: Date.now() + 10,
    stage: 'deepSleepLocked',
    duration: 0,
    unit: 'ms',
    locked: true
  };
  const [energyConsumptionData, setEnergyConsumptionData] = useState([energyConsumptionDataDefaultLocked]);
  const energyHarvestingDataDefault = {id: Date.now(), stage: 'solarCell', power: 100, duration: 1, unit: 'sec'};
  const [energyHarvestingData, setEnergyHarvestingData] = useState([]);
  const [durationDeepSleepLocked, setDurationDeepSleepLocked] = useState(0);

  const series = useMemo(
    () => generatePowerSeries(
      energyConsumptionData, energyHarvestingData, feartureData?.chip?.value,
      feartureData?.cell?.value, powerProfilesConfig, solarProfilesConfig, feartureData?.area
    ),
    [energyConsumptionData, energyHarvestingData, feartureData]
  );

  const chartData = useMemo(
    () => series.map(pt => ({...pt, time: convertTime(pt.time, 'ms', timeUnit)})),
    [series, timeUnit]
  );

  const energy = useMemo(() => computeEnergy(series), [series]);

  useEffect(() => {

    const totalDurationHarvesting = energyHarvestingData.reduce((sum, item) => sum + Number(convertTime(item?.duration, item?.unit, 'ms')), 0);
    const totalDurationConsumption = energyConsumptionData.filter(item => !item.locked).reduce((sum, item) => sum + Number(convertTime(item?.duration, item?.unit, 'ms')), 0);

    const totalDurationDeepSleepLocked = totalDurationHarvesting - totalDurationConsumption
    setDurationDeepSleepLocked(totalDurationDeepSleepLocked > 0 ? totalDurationDeepSleepLocked : 0);

  }, [energyHarvestingData, energyConsumptionData]);

  useEffect(() => {
    const deepSleepItem = energyConsumptionData.find(item => item.stage === 'deepSleepLocked');

    if (deepSleepItem && deepSleepItem.duration !== durationDeepSleepLocked) {
      setEnergyConsumptionData(prev =>
        prev.map(item =>
          item.stage === 'deepSleepLocked'
            ? {...item, duration: durationDeepSleepLocked}
            : item
        )
      );
    }
  }, [durationDeepSleepLocked]);


  const clickSavePresent = () => {
    const preset = {
      consumption: energyConsumptionData,
      harvesting: energyHarvestingData,
      feartureData: feartureData
    };
    // localStorage.setItem(keyPresetData, JSON.stringify(preset));
    // Tạo timestamp định dạng yyyy_mm_dd_hh_mm
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const timestamp = `${now.getFullYear()}_${pad(now.getMonth() + 1)}_${pad(now.getDate())}_${pad(now.getHours())}_${pad(now.getMinutes())}_${pad(now.getSeconds())}`;

    // Tạo tên file
    const filename = `${keyPresetData}_custom_${timestamp}.json`;
    // Tạo file JSON và trigger download
    const blob = new Blob([JSON.stringify(preset, null, 2)], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Present saved");
  }

  const generateId = () => Date.now() + Math.floor(Math.random() * 10000);

  const regenerateIds = (consumptionData, harvestingData) => {
    const newConsumption = consumptionData.map(item => ({
      ...item,
      id: generateId(),
    }));
    const newHarvesting = harvestingData.map(item => ({
      ...item,
      id: generateId(),
    }));
    return {
      consumption: newConsumption,
      harvesting: newHarvesting,
    };
  };

  const clickLoadPresent = () => {
    const preset = localStorage.getItem(keyPresetData);
    if (preset) {
      const {consumption, harvesting, feartureData} = JSON.parse(preset);
      setFeartureData(feartureData);
      setEnergyConsumptionData(consumption);
      setEnergyHarvestingData(harvesting);
      // alert("✅ Preset loaded!");
      toast.success("Preset loaded!");
    } else {
      // alert("❌ No preset found.");
      toast.error("No preset found.")
    }
  }

  const loadPresent = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const result = JSON.parse(event.target.result);

        const isValid =
          result &&
          Array.isArray(result.consumption) &&
          Array.isArray(result.harvesting) &&
          typeof result.feartureData === 'object';

        if (!isValid) {
          toast.error("❌ Invalid preset file format.");
          return;
        }

        const {consumption: newConsumption, harvesting: newHarvesting} = regenerateIds(
          result.consumption,
          result.harvesting
        );

        // setFeartureData(result.feartureData);
        const presetKeyNew = _.get(result.feartureData,"preset.value");
        featureRef.current.updateDataSetting(result.feartureData);
        setEnergyConsumptionData(newConsumption);
        setEnergyHarvestingData(newHarvesting);
        setPresetKey(presetKeyNew)

        setIsChangeData(true)

        toast.success("✅ Preset loaded from file!");
      } catch (err) {

        console.log(err)
        toast.error("❌ Failed to parse JSON file.");
      }
    };

    reader.readAsText(file);
  }


  const handleDataWhenChangeRequest = (preset) => {
    setPresetKey(preset);
    if (preset === KEY_CUSTOM_PRESET) {
      return
    }
    const {presets: presetsData} = powerProfilesPreset;

    if (presetsData) {
      const foundPreset = presetsData.find(item => item.value === preset);
      if (foundPreset && foundPreset.config) {
        const {consumption, harvesting} = foundPreset.config;

        const {consumption: newConsumption, harvesting: newHarvesting} = regenerateIds(consumption, harvesting)
        setEnergyHarvestingData(newHarvesting);
        setEnergyConsumptionData(newConsumption);
      }
    }
    setIsChangeData(false);
  }
  const changePreset = (preset) => {
    if (keyPresetData === KEY_CUSTOM_PRESET && preset !== KEY_CUSTOM_PRESET && isChangeData) {
      swal({
        title: "Are you sure?",
        text: "Changing presets will overwrite your current data.",
        icon: "warning",
        buttons: ["Cancel", "Yes, change it"],
        dangerMode: true,
      }).then((willChange) => {
        if (willChange) {
          // setPreset(newPreset);
          handleDataWhenChangeRequest(preset)
        }
      });
      return;
    }
    handleDataWhenChangeRequest(preset)

  }

  const wrapSetEnergyConsumption = (consumption) => {
    setEnergyConsumptionData(consumption);
    setIsChangeData(true);
    setPresetKey(KEY_CUSTOM_PRESET)
    setFeartureData({...feartureData, preset: {"value": KEY_CUSTOM_PRESET, "label": LABEL_CUSTOM_PRESET}})
  }

  const wrapSetEnergyHarvestingData = (harvesting) => {
    setEnergyHarvestingData(harvesting);
    setIsChangeData(true);
    setPresetKey(KEY_CUSTOM_PRESET)
    setPresetKey(KEY_CUSTOM_PRESET)
    setFeartureData({...feartureData, preset: {"value": KEY_CUSTOM_PRESET, "label": LABEL_CUSTOM_PRESET}})
  }


  return (
    <SettingChartStyled>
      <div>
        <FeatureSetting
          ref={featureRef}
          powerProfilesConfig={powerProfilesConfig} solarProfilesConfig={solarProfilesConfig}
          setFeartureData={setFeartureData} setPresetKey={changePreset}
          keyPresetData={keyPresetData}
          powerProfilesPreset={powerProfilesPreset}/>
      </div>
      <div className={'w-100'}>
        <PowerTimeline chartData={chartData} energy={energy} timeUnit={timeUnit} setTimeUnit={setTimeUnit}/>
      </div>
      <div className={' d-flex flex-md-row flex-column w-100 gap-144'}>
        <EnergyConsumption energyConsumptionData={energyConsumptionData}
                           energyConsumptionDataDefaultLocked={energyConsumptionDataDefaultLocked}
                           setEnergyConsumptionData={wrapSetEnergyConsumption}
                           energyConsumptionDataDefault={energyConsumptionDataDefault}></EnergyConsumption>
        <EnergyHarvesting energyHarvestingData={energyHarvestingData}
                          setEnergyHarvestingData={wrapSetEnergyHarvestingData}
                          energyHarvestingDataDefault={energyHarvestingDataDefault}></EnergyHarvesting>

      </div>
      <div className="d-flex justify-content-center mt-4 gap-3">
        <button onClick={clickSavePresent} className="btn btn-outline-light">Save Preset</button>
        {/*<button onClick={clickLoadPresent} className="btn btn-outline-light">Load Preset</button>*/}
        <label className="btn btn-outline-light" style={{cursor: 'pointer'}}>
          Load Preset
          <input
            type="file"
            accept=".json"
            hidden
            onChange={loadPresent}
          />
        </label>
      </div>

      {/*<ConfirmModal show={showModal} onConfirm={confirmChange} onCancel={cancelChange} />*/}
      <ToastContainer/>
    </SettingChartStyled>)
}

export default SettingChart;