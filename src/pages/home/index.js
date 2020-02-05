import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChartData } from '../../api'
import echarts from 'echarts'
import './theme/black'
import './theme/white'
import './theme/blue'
import './index.less'
// import * as Actions from '../../store/actions/article'
class index extends Component {
    state = {
        demoList: [
            {
                id: 1,
                title: 'react-article',
                main: 'react + redux + react-redux + redux-thunk + react-router-dom + axios + Antd + node + express + mongoose + MongoDB',
                link: 'http://106.13.184.92/react-demo1/',
                git: 'https://github.com/togoc/react',
                pic: ['http://106.13.184.92/index/img/react-article/index.png'],
                point: 36
            },
            {
                id: 2,
                title: 'mallshop',
                link: 'http://106.13.184.92/mallshop/',
                main: 'react + shouldComponentUpdate + redux + thunk + react-router-dom',
                git: '1',
                pic: ['http://106.13.184.92/index/img/mallshop/index.png'],
                point: 20
            },
            {
                id: 3,
                main: 'vue + vue-router+vuex + axios + element- ui + node + express + mongoose + bcryptjs',
                title: 'vue-todo',
                link: 'http://106.13.184.92/vue-todo/',
                git: '1',
                pic: ['http://106.13.184.92/index/img/vue-todo/index.png'],
                point: 39

            },
            {
                id: 4,
                main: 'vue+ vue-router+ vuex+ axios+ element-ui+ node + express + mongoose+ MongoDB + bcryptjs+ jsonwebtoken + passport + passport - jwt',
                title: 'vue-pro',
                link: 'http://106.13.184.92/vue-pro',
                git: '1',
                pic: ['http://106.13.184.92/index/img/mallshop/index.png'],
                point: 38
            }
        ],
        theme: [
            {
                id: 1,
                active: true,
                value: 'white'
            },
            {
                id: 2,
                active: false,
                value: 'black'

            },
            {
                id: 3,
                active: false,
                value: 'walden'

            },
        ]
    }
    paintChart = (str) => {
        var myChart = echarts.init(this.refs.chart, str);
        this.myChart = myChart
        myChart.showLoading();
        getChartData().then(json => {
            this.myChart.setOption({
                title: {
                    text: 'NPM Dependencies'
                },
                animationDurationUpdate: 2000,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        // progressiveThreshold: 700,
                        data: json.nodes.map(function (node) {
                            return {
                                id: node.label,
                                name: node.label,
                                symbolSize: node.size,
                                // itemStyle: {
                                // color: node.color
                                // }
                            };
                        }),
                        edges: json.edges.map(function (edge) {
                            return {
                                source: edge.sourceID,
                                target: edge.targetID
                            };
                        }),
                        emphasis: {
                            label: {
                                position: 'right',//字体显示位置
                                show: true //是否显示字体
                            }
                        },
                        force: {
                            gravity: 0.1,//该值越大节点越往中心点靠拢。
                            edgeLength: 100,//边的两个节点之间的距离
                            repulsion: 92 //节点之间的斥力因子。
                        },
                        nodeScaleRatio: 1.5,
                        roam: true,
                        draggable: true,
                        focusNodeAdjacency: true,
                    }
                ]
            });
        })
        myChart.hideLoading();
        // myChart.on('click', function (params) {
        //     console.log(params)
        //     console.log("seriesIndex :", params.seriesIndex);
        //     console.log("dataIndex :", params.dataIndex);
        // });
        window.onresize = myChart.resize

    }
    componentDidMount() {
        this.state.theme.forEach(v => v.active === true ? this.paintChart(v.value) : false)
    }
    render() {
        return (
            <div className="home">
                <div className="home_outer">
                    {
                        this.state.demoList.map((v, index) => {
                            return (
                                <a href={v.link} className="demo_item" key={v.id + index}
                                    onMouseOver={() => {
                                        this.myChart.dispatchAction({
                                            type: 'focusNodeAdjacency',
                                            seriesIndex: 0,
                                            dataIndex: v.point
                                        })
                                    }}
                                    onMouseOut={() => {
                                        this.myChart.dispatchAction({
                                            type: 'unfocusNodeAdjacency',
                                        })
                                    }}
                                >
                                    <img src={v.pic[0]} alt="" />
                                    <div className="demo_item_detail">
                                        <div className="title-outer">
                                            <span className="title">
                                                {v.title}
                                            </span>
                                        </div>
                                        <div className="main-outer">
                                            <span className="main">
                                                {v.main.length <= 11 && v.main}
                                                <span className="scroll">
                                                    {v.main.length > 11 && v.main}
                                                </span>
                                            </span>
                                            <a target="_blank" href={v.git}><span className="iconfont icon-GitHub">GitHub</span></a>
                                        </div>
                                    </div>
                                    <div className="bg"></div>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="chart_outer">
                    <div ref="chart" className="chart" ></div>
                    <div className="theme">
                        <label ></label>
                        <span >Theme:</span>
                        {
                            this.state.theme.map(v => {
                                return <span key={v.id} className={v.active ? 'active' : ''} onClick={() => {
                                    this.setState(() => {
                                        this.state.theme.forEach(v1 => v1.id === v.id ? v1.active = true : v1.active = false)
                                        return this.state.theme
                                    }, () => {
                                        this.myChart.dispose()
                                        this.paintChart(v.value)
                                        this.myChart.hideLoading()
                                    })
                                }
                                } />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapState)(index)