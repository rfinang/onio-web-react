import DataTooltip from "./chart-data/DataTooltip";
import {PowerTimelineStyled} from "../../styles/energy-emulator/PowerTimelineStyled";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
// import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const ApexChart = dynamic(() => import("react-apexcharts"), {ssr: false});

const PowerTimeline = ({timeUnit, setTimeUnit, energy, chartData}) => {
    const containerRef = useRef(null);
    const [offsetX, setOffsetX] = useState(0);

    const updateOffset = () => {
        const canvas = containerRef.current.querySelector('.apexcharts-canvas');

        if (canvas instanceof Element) {
            const width = canvas.offsetWidth;
            setOffsetX(width/3 + width/24); // 50 là padding/title width tuỳ chỉnh
        }
    };

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const canvas = containerRef.current?.querySelector('.apexcharts-canvas');
            if (canvas) {
                updateOffset();
                observer.disconnect(); // ngắt theo dõi sau khi đã thấy canvas
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, { childList: true, subtree: true });
        }

        window.addEventListener('resize', updateOffset);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateOffset);
        };
    }, []);

    const options = {
        chart: {
            offsetX: 0,
            type: "line",
            background: "var(--onio-color-primary)", // màu nền tối giống biểu đồ
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        stroke: {
            curve: "stepline", // đường bậc thang
            width: 2
        },
        grid: {
            padding: {
                left: 40, // khoảng trắng bên trái
                top: 0,
                bottom: 30,
                right: 40,
            },
            borderColor: "var(--onio-color-muted)",
            strokeDashArray: 5
        },
        xaxis: {
            tickPlacement: true,
            type: "numeric",
            min: 0,
            title: {
                offsetX: offsetX,
                offsetY: 30,
                text: `Time (${timeUnit})`,
                style: {color: "var(--onio-color-white)", fontSize: '2.7rem', fontFamily: "Inter", fontWeight: "300"},
            },
            labels: {
                // offsetY: 6,
                style: {colors: "var(--onio-color-muted)", fontSize: '1.8rem', lineHeight: '5rem', fontFamily: "Inter", fontWeight: "300"},
                formatter: (val) => {
                    const num = parseFloat(val);
                    if (!isFinite(num)) return '∞';
                    if (num === 0) return '0';

                    const abs = Math.abs(num);

                    if (abs < 1e-3 || abs >= 1e6) {
                        return num.toExponential(1);
                    }

                    return num.toFixed(3).replace(/\.?0+$/, '');
                },
                forceNiceScale: true,
                showDuplicates: false,
                trim: true,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#fff',
                height: 10,
                offsetX: 0,
                offsetY: 0
            },
            tickAmount: 4,
        },
        yaxis: {
            axisBorder: {
                show: true,
                color: '#fff',
                offsetX: 0,
                offsetY: 0
            },
            tickAmount: 4,
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#fff',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            minWidth: 0,
            title: {
                offsetX: -30,
                offsetY: -180,
                text: "Power (mW)",
            style: {color: "var(--onio-color-white)", fontSize: '2.4rem', fontFamily: "Inter", fontWeight: "300"},

            },
            labels: {
                offsetX: 27,
            style: {colors: "var(--onio-color-muted)", fontSize: '1.8rem', lineHeight: '5rem', fontFamily: "Inter", fontWeight: "300"},
                hideOverlappingLabels: true,
                showDuplicates: false,
                minWidth: 0,
                trim: true,
                formatter: (val) => {
                    const num = Number(val);
                    if (!isFinite(num)) return '∞';

                    const abs = Math.abs(num);
                    if (abs >= 1e9) return (num / 1e9).toFixed(1) + 'B';
                    if (abs >= 1e6) return (num / 1e6).toFixed(1) + 'M';
                    if (abs >= 1e3) return (num / 1e3).toFixed(1) + 'k';
                    if (abs > 0 && abs < 1) {
                        return num.toFixed(2).replace(/\.?0+$/, '');
                    }
                    return num.toFixed(0);
                }
            }
        },
        legend: {
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: 300,
            padding: 0,
            position: 'bottom',
            horizontalAlign: 'left',
            offsetX: 60,
            offsetY: -25,
            markers: {
                offsetX: -10
            },
            labels: {
                colors: "var(--onio-color-white)"
            },
            itemMargin: {
                horizontal: 30,
                vertical: 0
            },
        },
        tooltip: {
            theme: "dark"
        },
        colors: ["var(--onio-color-secondary)", "var(--onio-color-alert)"],
        responsive: [
            {
                breakpoint: 1600,
                options: {
                    chart: {
                        height: 646,
                    },
                    xaxis: {
                        title: {
                            offsetX: offsetX,
                        },
                    },
                    yaxis: {
                        axisBorder: {
                            show: true,
                            color: '#fff',
                            offsetX: 0,
                            offsetY: 0
                        },
                        tickAmount: 4,
                        axisTicks: {
                            show: true,
                            borderType: 'solid',
                            color: '#fff',
                            width: 6,
                            offsetX: 0,
                            offsetY: 0
                        },
                        title: {
                            offsetX: -30,
                            offsetY: -180,
                            text: "Power (mW)",
                            style: {color: "#fff", fontSize: '2.4rem', fontFamily: "Inter", fontWeight: "300"},

                        },
                        labels: {
                            offsetX: 27,
                            style: {
                                colors: "var(--onio-color-muted)",
                                fontSize: '1.8rem',
                                lineHeight: '5rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                            trim: true,
                            formatter: (val) => {
                                const num = Number(val);
                                if (!isFinite(num)) return '∞';

                                const abs = Math.abs(num);
                                if (abs >= 1e9) return (num / 1e9).toFixed(1) + 'B';
                                if (abs >= 1e6) return (num / 1e6).toFixed(1) + 'M';
                                if (abs >= 1e3) return (num / 1e3).toFixed(1) + 'k';
                                if (abs > 0 && abs < 1) {
                                    return num.toFixed(2).replace(/\.?0+$/, '');
                                }
                                return num.toFixed(0);
                            }
                        }
                    },
                }
            },
            {
                breakpoint: 1440,
                options: {
                    chart: {
                        height: 646,
                    },
                    xaxis: {
                        title: {
                            offsetX: offsetX,
                        },
                    },
                    yaxis: {
                        axisBorder: {
                            show: true,
                            color: '#fff',
                            offsetX: 0,
                            offsetY: 0
                        },
                        tickAmount: 4,
                        axisTicks: {
                            show: true,
                            borderType: 'solid',
                            color: '#fff',
                            width: 6,
                            offsetX: 0,
                            offsetY: 0
                        },
                        title: {
                            offsetX: -30,
                            offsetY: -180,
                            text: "Power (mW)",
                            style: {color: "#fff", fontSize: '2.4rem', fontFamily: "Inter", fontWeight: "300"},

                        },
                        labels: {
                            offsetX: 27,
                            style: {
                                colors: "#ccc",
                                fontSize: '1.8rem',
                                lineHeight: '5rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                            trim: true,
                            formatter: (val) => {
                                const num = Number(val);
                                if (!isFinite(num)) return '∞';

                                const abs = Math.abs(num);
                                if (abs >= 1e9) return (num / 1e9).toFixed(1) + 'B';
                                if (abs >= 1e6) return (num / 1e6).toFixed(1) + 'M';
                                if (abs >= 1e3) return (num / 1e3).toFixed(1) + 'k';
                                if (abs > 0 && abs < 1) {
                                    return num.toFixed(2).replace(/\.?0+$/, '');
                                }
                                return num.toFixed(0);
                            }
                        }
                    },
                }
            },
            {
                breakpoint: 1280,
                options: {
                    chart: {
                        height: 646,
                        offsetX: -10,
                    },
                    grid: {
                        padding: {
                            right: 40,
                        },
                    },
                    xaxis: {
                        title: {
                            offsetX: offsetX - 25 ,
                            style: {
                                color: "#fff",
                                fontSize: '2.4rem',
                                lineHeight: '2.9rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                        },
                        labels: {
                            style: {
                                colors: "#fff",
                                fontSize: '1.8rem',
                                lineHeight: '2.3rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                        },

                    },
                    yaxis: {
                        axisBorder: {
                            show: true,
                            color: '#fff',
                            offsetX: 0,
                            offsetY: 0
                        },
                        tickAmount: 4,
                        axisTicks: {
                            show: true,
                            borderType: 'solid',
                            color: '#fff',
                            width: 6,
                            offsetX: 0,
                            offsetY: 0
                        },
                        title: {
                            offsetX: -30,
                            offsetY: -180,
                            text: "Power (mW)",
                            style: {color: "#fff", fontSize: '2.4rem', fontFamily: "Inter", fontWeight: "300"},

                        },
                        labels: {
                            offsetX: 27,
                            style: {
                                colors: "#ccc",
                                fontSize: '1.8rem',
                                lineHeight: '5rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                            trim: true,
                            formatter: (val) => {
                                const num = Number(val);
                                if (!isFinite(num)) return '∞';

                                const abs = Math.abs(num);
                                if (abs >= 1e9) return (num / 1e9).toFixed(1) + 'B';
                                if (abs >= 1e6) return (num / 1e6).toFixed(1) + 'M';
                                if (abs >= 1e3) return (num / 1e3).toFixed(1) + 'k';
                                if (abs > 0 && abs < 1) {
                                    return num.toFixed(2).replace(/\.?0+$/, '');
                                }
                                return num.toFixed(0);
                            }
                        }
                    },
                }
            },
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        offsetX: 0,
                        width: '100%',
                    },
                    xaxis: {
                        title: {
                            offsetX: 0,
                            offsetY: 30,
                            style: {
                                color: "#fff",
                                fontSize: '2.4rem',
                                lineHeight: '2.9rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                        },
                        labels: {
                            style: {
                                colors: "#fff",
                                fontSize: '1.8rem',
                                lineHeight: '2.3rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                        },

                    },
                    yaxis: {
                        tickAmount: 4,
                        forceNiceScale: true,
                        axisBorder: {
                            show: true,
                            color: '#fff',
                            offsetX: 0,
                            offsetY: 0
                        },
                        labels: {
                            offsetX: 27,
                            maxWidth: 120,
                            style: {
                                colors: "#fff",
                                fontSize: '1.8rem',
                                lineHeight: '2.3rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                            trim: true,
                            formatter: (val) => {
                                const num = Number(val);
                                if (!isFinite(num)) return '∞';

                                const abs = Math.abs(num);
                                if (abs >= 1e9) return (num / 1e9).toFixed(1) + 'B';
                                if (abs >= 1e6) return (num / 1e6).toFixed(1) + 'M';
                                if (abs >= 1e3) return (num / 1e3).toFixed(1) + 'k';
                                if (abs > 0 && abs < 1) {
                                    return num.toFixed(2).replace(/\.?0+$/, '');
                                }
                                return num.toFixed(0);
                            }
                        },
                        title: {
                            offsetX: -30,
                            offsetY: -40,
                            text: "Power (mW)",
                            floating: true,
                            style: {
                                color: "#fff",
                                fontSize: '2.4rem',
                                lineHeight: '2.9rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },

                        },
                    },
                    legend: {
                        offsetX: 60,
                        offsetY: 10,
                        horizontalAlign: 'center',
                        itemMargin: {
                            horizontal: 20,
                        },
                    }
                }
            },
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 400,
                        offsetX: 0,
                        width: '100%',
                    },
                    xaxis: {
                        title: {
                            offsetX: 0,
                            offsetY: 30,
                            style: {
                                color: "#fff",
                                fontSize: '1.8rem',
                                lineHeight: '2.3rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                        },
                        labels: {
                            style: {
                                colors: "#fff",
                                fontSize: '1.4rem',
                                lineHeight: '1.6rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                            trim: true,
                            formatter: (val) => {
                                const num = Number(val);
                                if (!isFinite(num)) return '∞';

                                const abs = Math.abs(num);
                                if (abs >= 1e9) return (num / 1e9).toFixed(0) + 'B';
                                if (abs >= 1e6) return (num / 1e6).toFixed(0) + 'M';
                                if (abs >= 1e3) return (num / 1e3).toFixed(0) + 'k';
                                if (abs > 0 && abs < 1) {
                                    return num.toFixed(2).replace(/\.?0+$/, '');
                                }
                                return num.toFixed(0);
                            }
                        },

                    },
                    yaxis: {
                        forceNiceScale: true,
                        width: 20,
                        axisBorder: {
                            show: true,
                            color: '#fff',
                            offsetX: 0,
                            offsetY: 0
                        },
                        labels: {
                            offsetX: 27,
                            style: {
                                colors: "#fff",
                                fontSize: '1.2rem',
                                lineHeight: '1.4rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                            hideOverlappingLabels: true,
                            showDuplicates: false,
                            trim: true,
                            maxWidth: 30,
                            formatter: (val) => {
                                const num = Number(val);
                                if (!isFinite(num)) return '∞';

                                const abs = Math.abs(num);
                                if (abs >= 1e9) return (num / 1e9).toFixed(1) + 'B';
                                if (abs >= 1e6) return (num / 1e6).toFixed(1) + 'M';
                                if (abs >= 1e3) return (num / 1e3).toFixed(1) + 'k';
                                if (abs > 0 && abs < 1) {
                                    return num.toFixed(2).replace(/\.?0+$/, '');
                                }
                                return num.toFixed(0);
                            }
                        },
                        title: {
                            offsetX: 0,
                            offsetY: -20,
                            text: "Power (mW)",
                            floating: true,
                            style: {
                                color: "#fff",
                                fontSize: '1.6rem',
                                lineHeight: '1.4rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },

                        },
                    },
                    legend: {
                        fontSize: 14,
                        offsetX: 0,
                        offsetY: 10,
                        horizontalAlign: 'center',
                        itemMargin: {
                            horizontal: 20,
                        },
                    }
                }
            },
            {
                breakpoint: 468,
                options: {
                    chart: {
                        height: 400,
                        offsetX: 0,
                        width: '100%',
                    },
                    xaxis: {
                        forceNiceScale: true,
                        offsetX: 0,
                        title: {
                            offsetY: 10,
                            style: {
                                color: "#fff",
                                fontSize: '1.4rem',
                                lineHeight: '1.6rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                        },
                        labels: {
                            style: {
                                colors: "#fff",
                                fontSize: '1.2rem',
                                lineHeight: '1.6rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                        },

                    },
                    yaxis: {
                        forceNiceScale: true,
                        axisBorder: {
                            show: true,
                            color: '#fff',
                            offsetX: 0,
                            offsetY: 0
                        },
                        labels: {
                            offsetX: 27,
                            style: {
                                colors: "#fff",
                                fontSize: '1.2rem',
                                lineHeight: '1.6rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },
                            maxWidth: 30,
                            formatter: (val) => {
                                const num = Number(val);
                                if (!isFinite(num)) return '∞';

                                const abs = Math.abs(num);
                                if (abs >= 1e9) return (num / 1e9).toFixed(1) + 'B';
                                if (abs >= 1e6) return (num / 1e6).toFixed(1) + 'M';
                                if (abs >= 1e3) return (num / 1e3).toFixed(1) + 'k';
                                if (abs > 0 && abs < 1) {
                                    return num.toFixed(2).replace(/\.?0+$/, '');
                                }
                                return num.toFixed(0);
                            }
                        },
                        title: {
                            offsetX: 0,
                            offsetY: -20,
                            text: "Power (mW)",
                            floating: true,
                            style: {
                                color: "#fff",
                                fontSize: '1.4rem',
                                lineHeight: '1.6rem',
                                fontFamily: "Inter",
                                fontWeight: "300"
                            },

                        },
                    },
                    legend: {
                        fontSize: 12,
                        offsetY: '2rem',
                        floating: true,
                        itemMargin: {
                            horizontal: 20,
                        },
                    }
                }
            }
        ]
    };

    const dataConsumption = chartData?.map(item => [
        item?.time,
        item?.consumption
    ])

    const dataHarvesting = chartData?.map(item => [
        item?.time,
        (isFinite(item?.harvesting) ? item.harvesting : 1e99)
    ]);

    const series = [
        {
            name: "energy harvesting",
            data: dataHarvesting
        },
        {
            name: "consumption",
            data: dataConsumption
        }
    ];


    const handleChangeTimeUnit = (e) => {
        setTimeUnit(e.target.value);
    }

    const {harvested_uj, required_uj, used_uj} = energy

    return (
        <PowerTimelineStyled>
            <div className='text-48 text-white mb-64'>Power Timeline</div>
            <div className={'d-flex flex-column'}>
                <div className={'d-flex flex-column-reverse flex-md-row'}>
                    <div ref={containerRef} className={'chartPowerTimeLine'}>
                        <ApexChart
                            options={options}
                            series={series}
                            type="line"
                            height={646}
                        />
                        {/*<ResponsiveContainer width="100%" height={646}>*/}
                        {/*    <LineChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>*/}
                        {/*        <CartesianGrid vertical={false} strokeDasharray="9 9" stroke="#514b4d" />*/}
                        {/*        <XAxis axisLine={{ stroke: '#fff' }} dataKey="time" type="number" domain={['auto', 'auto']} tickFormatter={t => `${t}`} label={{ value: `Time (${timeUnit})`, position: 'insideBottomRight', offset: -5 }} />*/}
                        {/*        <YAxis axisLine={{ stroke: '#fff' }} label={{ value: 'Power (mW)', angle: -90, position: 'insideLeft' }} />*/}
                        {/*        <Tooltip />*/}
                        {/*        <Legend />*/}
                        {/*        <Line type="stepAfter" dataKey="consumption" stroke="#f44336" dot={false} />*/}
                        {/*        <Line type="stepAfter" dataKey="harvesting" stroke="#4caf50" dot={false} />*/}
                        {/*    </LineChart>*/}
                        {/*</ResponsiveContainer>*/}
                    </div>
                    <div
                        className={'d-flex flex-column align-items-center valuePowerTimeLine justify-content-center mb-64 gap-65'}>
                        <DataTooltip value={harvested_uj?.value} unit={harvested_uj?.unit} title={'harvested'}/>
                        <DataTooltip value={used_uj?.value} unit={used_uj?.unit} title={'consumed'}/>
                        <DataTooltip value={required_uj?.value} unit={required_uj?.unit} title={'required storage'}/>
                    </div>

                </div>
                <div className={'d-flex flex-wrap mt-30 align-items-center w-100 justify-content-center mb-64 gap-24'}>
                    <div className={'d-flex align-items-center p-64 col-5 ps-md-3 col-md-5 col-lg-auto'}>
                        <div className='checkInput row mx-0 px-0 d-flex align-items-center'>
                            <div
                                className='col-12 px-0 d-flex justify-content-between align-items-center'>
                                <label style={{fontSize: '2rem', lineHeight: '26px'}}
                                       className="containerRadio textMedium">
                                    <input checked={timeUnit === 'hour'}
                                           type="radio"
                                           value={'hour'}
                                           onChange={handleChangeTimeUnit}
                                           name='addressChoices'/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className={'text-white text-20'}>hours</div>
                    </div>
                    <div className={'d-flex align-items-center p-64 col-5 ps-md-3 col-md-5 col-lg-auto'}>
                        <div className='checkInput row mx-0 px-0 d-flex align-items-center'>
                            <div
                                className='col-12 px-0 d-flex justify-content-between align-items-center'>
                                <label style={{fontSize: '2rem', lineHeight: '2.6rem'}}
                                       className="containerRadio textMedium">
                                    <input checked={timeUnit === 'min'}
                                           type="radio"
                                           value={'min'}
                                           onChange={handleChangeTimeUnit}
                                           name='addressChoices'/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className={'text-white text-20'}>minutes</div>
                    </div>
                    <div className={'d-flex align-items-center p-64 col-5 ps-md-3 col-md-5 col-lg-auto'}>
                        <div className='checkInput row mx-0 px-0 d-flex align-items-center'>
                            <div
                                className='col-12 px-0 d-flex justify-content-between align-items-center'>
                                <label style={{fontSize: '2rem', lineHeight: '2.6rem'}}
                                       className="containerRadio textMedium">
                                    <input checked={timeUnit === 'sec'}
                                           type="radio"
                                           value={'sec'}
                                           onChange={handleChangeTimeUnit}
                                           name='addressChoices'/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className={'text-white text-20'}>seconds</div>
                    </div>
                    <div className={'d-flex align-items-center p-64 col-5 ps-md-3 col-md-5 col-lg-auto'}>
                        <div className='checkInput row mx-0 px-0 d-flex align-items-center'>
                            <div
                                className='col-12 px-0 d-flex justify-content-between align-items-center'>
                                <label style={{fontSize: '2rem', lineHeight: '2.6rem'}}
                                       className="containerRadio textMedium">
                                    <input checked={timeUnit === 'ms'}
                                           type="radio"
                                           value={'ms'}
                                           onChange={handleChangeTimeUnit}
                                           name='addressChoices'/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className={'text-white text-20'}>miliseconds</div>
                    </div>
                </div>
            </div>
        </PowerTimelineStyled>
    )
}

export default PowerTimeline;
