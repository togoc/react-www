import echarts from 'echarts'
echarts.registerTheme('walden', {
    "color": [
        "#3fb1e3",
        "#6be6c1",
        "#626c91",
        "#a0a7e6",
        "#c4ebad",
        "#96dee8"
    ],
    "backgroundColor": "#eef9dd",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#666666"
        },
        "subtextStyle": {
            "color": "#999999"
        }
    },
    "graph": {
        "itemStyle": {
            "borderWidth": 1,
            "color": '#8dacb1'
        },
        "lineStyle": {
            "width": "2",
            "color": "#ff6b3a",
            curveness: 0.3,
            opacity: 1
        },
        "symbolSize": "80",
        "symbol": "circle",
        "smooth": true,
        "label": {
            "textStyle": {
                "color": "#000000"
            }
        }
    }
});
