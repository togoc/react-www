import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'
// import * as Actions from '../../store/actions/article'
class index extends Component {
    state = {
        demoList: [
            {
                id: 1,
                title: 'demo1',
                main: 'react',
                link: 'www',
                pic: ['http://106.13.184.92/mallshop/img/swiper/banner3.png']
            },
            {
                id: 2,
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, perferendis.',
                link: 'www',
                main: 'react',
                pic: ['http://106.13.184.92/mallshop/img/swiper/banner3.png']
            },
            {
                id: 3,
                main: 'vue',
                title: 'demo3',
                link: 'www',
                pic: ['http://106.13.184.92/mallshop/img/swiper/banner3.png']
            },
            {
                id: 3,
                main: 'vue',
                title: 'demo3',
                link: 'www',
                pic: ['http://106.13.184.92/mallshop/img/swiper/banner3.png']
            }
        ]
    }
    componentDidMount() {
        let token = localStorage.getItem('USER_TOKEN')
        console.log(token)
    }
    render() {
        return (
            <div className="home">
                {
                    this.state.demoList.map(v => {
                        return (
                            <div className="demo_item" style={{ backgroundImage: `url(${v.pic[0]})` }}>
                                <div className="demo_item_detail">
                                    <div className="title-outer">
                                        <span className="title">
                                            {v.title}
                                        </span>
                                    </div>

                                    <div className="main-outer">
                                        <span className="main">
                                            {v.main}
                                        </span>
                                    </div>
                                </div>
                                <div className="bg"></div>
                            </div>
                        )
                    })
                }
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