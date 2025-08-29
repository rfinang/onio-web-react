import React, {forwardRef, useImperativeHandle} from 'react';
import Select from "react-select";
import {customSelectStylesNew} from "../../styles/common/CustomSelectStylesNew";
import {POWER_PROFILES_MAP, SOLAR_PROFILES} from "../../../constant/energy-data";
import {useEffect, useState} from "react";
import {FeatureSettingStyled} from "../../styles/energy-emulator/setting-chart/FeatureSettingStyled";

const FeatureSetting = forwardRef(({
                                     setFeartureData,
                                     solarProfilesConfig,
                                     powerProfilesConfig,
                                     keyPresetData,
                                     setPresetKey,
                                     powerProfilesPreset
                                   }, ref) => {

  const powerProfilesConfigMap = {
    onioZero: {
      name: powerProfilesConfig.onioZero.name,
      stage: Object.entries(powerProfilesConfig.onioZero)
        .filter(([key]) => key !== 'name')
        .map(([key, _]) => ({
          [key]: POWER_PROFILES_MAP[key]?.label,
          icon: POWER_PROFILES_MAP[key]?.icon
        }))
    }
  };

  const optionsChip = Object.entries(powerProfilesConfigMap).map(([key, value]) => ({
    value: key,
    label: value.name
  }))

  const optionsCell = Object.entries(solarProfilesConfig).map(([key, value]) => ({
    value: key,
    label: value.name,
    area: value.area
  }))

  let optionsPreset = [];
  if (powerProfilesPreset) {
    optionsPreset = powerProfilesPreset.presets.map(value => ({value: value.value, label: value.label}))
  }

  const [chip, setChip] = useState(optionsChip[0]);
  const [cell, setCell] = useState(optionsCell[0]);
  const [size, setSize] = useState(optionsCell[0].area);


  const preset = optionsPreset.find(item => item.value === keyPresetData);

  useImperativeHandle(ref, () => ({
    updateDataSetting,
    updatePreset
  }));




  const updatePreset = (presetKey) => {
    // setPresent(optionsPreset.find(item => item.value == presetKey));
  }

  const updateDataSetting = (objDataSetting) => {

    const {chip: newChip, cell: newCell, area: newArea, preset: newPreset} = objDataSetting

    setChip(optionsChip.find(item => item.value == newChip.value));
    // setPresent(optionsPreset.find(item => item.value == newPreset.value));
    setCell(newCell)
    setSize(newArea);
  }


  useEffect(() => {
    setPresetKey(optionsPreset[0].value)
  }, [])

  useEffect(() => {
    setFeartureData({chip, cell, area: size, preset})
  }, [chip, cell, size]);

  const handleSetSize = (e) => {
    let value = e.target.value;
    if (value === '') {
      setSize(0)
      return;
    }
    ;

    if (/^0[0-9]+$/.test(value)) {
      value = value.replace(/^0+/, '');
    }

    const decimalRegex = /^(0|[1-9]\d*)(\.\d*)?$/;

    if (value === '' || decimalRegex.test(value)) {
      setSize(value);
    }

  };

  return (
    <FeatureSettingStyled>
      <div className={'col-lg-5 px-0'}>
        <div className='text-48 text-white mb-64'>Global Settings</div>
        <div className={'d-flex flex-column flex-md-row align-items-center'}>
          <div className="col-md-4 col-lg-5 col-12 px-0">
            <div
              className={`form-group form-group--required is-required form-group--white`}
            >
              <div className={'text-alert text-14 mb-2'}>Select your chip</div>
              <Select
                closeMenuOnScroll={true}
                styles={customSelectStylesNew}
                instanceId="reason_for_contacting"
                name={`reason_for_contacting`}
                value={chip}
                onChange={(value) => setChip(value)}
                options={optionsChip}
                isClearable={false}
                components={{
                  DropdownIndicator: () => (
                    <svg
                      width="27"
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                }}
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-5 col-12 ms-md-4 px-0 ml-144">
            <div
              className={`form-group form-group--required is-required form-group--white`}
            >
              <div className={'text-alert text-14 mb-2'}>Preset</div>
              <Select
                closeMenuOnScroll
                styles={customSelectStylesNew}
                instanceId="device_preset"
                name={`device_preset`}
                value={preset}
                onChange={(item) => {
                  // setPresent(item);
                  setPresetKey(item.value)
                }}
                options={optionsPreset}
                isClearable={false}
                components={{
                  DropdownIndicator: () => (
                    <svg
                      width="27"
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                }}
              />
            </div>
          </div>

          <div className="col-md-4 col-lg-5 col-12 ms-md-4 px-0 ml-144">
            <div
              className={`form-group form-group--required is-required form-group--white`}
            >
              <div className={'text-alert text-14 mb-2'}>Select your solar cell</div>
              <Select
                closeMenuOnScroll
                styles={customSelectStylesNew}
                instanceId="reason_for_contacting"
                name={`reason_for_contacting`}
                value={cell}
                onChange={(value) => {
                  setCell(value)
                  setSize(value.area)
                }}
                options={optionsCell}
                isClearable={false}
                components={{
                  DropdownIndicator: () => (
                    <svg
                      width="27"
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 1.14063L13.5 14.2813L0.999999 1.14063"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                }}
              />
            </div>
          </div>

          <div className=" px-0 col-md-2 ms-md-4 col-12">
            <div
              className={`form-group is-required form-group--white`}
            >
              <div className={'text-alert text-14'}>Size in cm²</div>
              <input className={"inputStage"} style={{marginTop: '3.6rem'}} value={size} onChange={handleSetSize}
              />
            </div>
          </div>
        </div>
      </div>
    </FeatureSettingStyled>
  )
})


export default FeatureSetting;