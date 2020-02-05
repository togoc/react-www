import echarts from 'echarts'
echarts.registerTheme('black', {
    "color": [
        "#c1232b",
        "#27727b",
        "#fcce10",
        "#e87c25",
        "#b5c334",
        "#fe8463",
        "#9bca63",
        "#fad860",
        "#f3a43b",
        "#60c0dd",
        "#d7504b",
        "#c6e579",
        "#f4e001",
        "#f0805a",
        "#26c0c0"
    ],
    "backgroundColor": "rgba(0,0,0)", //背景
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#27727b"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "width": 2,
            "color": "#aaa",
            curveness: 0.3,
            opacity: 1
        },
        "symbolSize": "5",
        "symbol": "emptyCircle",
        "smooth": false,
        "color": [
            "#27727b",
            "#c1232b",
            "#fcce10",
            "#e87c25",
            "#b5c334",
            "#fe8463",
            "#9bca63",
            "#fad860",
            "#f3a43b",
            "#60c0dd",
            "#d7504b",
            "#c6e579",
            "#f4e001",
            "#f0805a",
            "#26c0c0"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#eeeeee"
                }
            }
        }
    }
});
