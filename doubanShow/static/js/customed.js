(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('customed', {
        "color": [
            "#7893ea",
            "#91cc75",
            "#fac858",
            "#ee6666",
            "#5ec9db",
            "#3ba272",
            "#fb8d34",
            "#9f4ef3"
        ],
        "backgroundColor": "rgba(28,28,28,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#f0efe7"
            },
            "subtextStyle": {
                "color": "#f0efe7"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "1"
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "3",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "1"
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "3",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#f0efe7"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#fb8d34",
                "color0": "#47b789",
                "borderColor": "#fb8d34",
                "borderColor0": "#47b789",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#f0efe7"
            },
            "lineStyle": {
                "width": 1,
                "color": "#f0efe7"
            },
            "symbolSize": "3",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#7893ea",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#5ec9db",
                "#3ba272",
                "#fb8d34",
                "#9f4ef3"
            ],
            "label": {
                "color": "#f0efe7"
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eee",
                    "borderColor": "#444",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#f0efe7"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#f0efe7"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#f0efe7"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#f0efe7"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#f0efe7"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#f0efe7"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#f0efe7"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#f0efe7"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#f0efe7"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#f0efe7"
                },
                "emphasis": {
                    "borderColor": "#f0efe7"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#f0efe7"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#aba8a8",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#aba8a8",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#d3a879",
                "width": "1"
            },
            "itemStyle": {
                "normal": {
                    "color": "#786147",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#af8d69"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#d3a879",
                    "borderColor": "#d3a879",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#d3a879",
                    "borderColor": "#d3a879",
                    "borderWidth": "1"
                }
            },
            "checkpointStyle": {
                "color": "#d3a879",
                "borderColor": "rgba(211,168,121,0.29)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#d3a879"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#d3a879"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#fdc765",
                "#37a2da"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(211,168,121,0.09)",
            "dataBackgroundColor": "rgba(211,168,121,0.54)",
            "fillerColor": "rgba(216,162,102,0.57)",
            "handleColor": "#d3a879",
            "handleSize": "100%",
            "textStyle": {
                "color": "#d3a879"
            }
        },
        "markPoint": {
            "label": {
                "color": "#f0efe7"
            },
            "emphasis": {
                "label": {
                    "color": "#f0efe7"
                }
            }
        }
    });
}));
