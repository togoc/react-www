import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.less'
// import * as Actions from '../../store/actions/article'
class index extends Component {
    state = {
        demoList: [
            {
                id: 1,
                title: 'demo1',
                main: 'react + react + react + reactreact + react看起来木有什么太大区别，但实际用起来的时候却又有区别，这是为啥呢，请听我细细道来关于Module',
                link: 'http://106.13.184.92/react-demo1/',
                git: 'https://github.com/togoc/react',
                pic: ['http://106.13.184.92/mallshop/img/swiper/banner3.png']
            },
            {
                id: 2,
                title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, perferendis.',
                link: 'www',
                main: 'react',
                git: '1',
                pic: ['http://106.13.184.92/mallshop/img/swiper/banner3.png']
            },
            {
                id: 3,
                main: 'vue',
                title: '看起来木有什么太大区别，但实际用起来的时候却又有区别，这是为啥呢，请听我细细道来关于Module.exports和exports有什么区别，网上一搜一大把，但是说的都太复杂了听说exports是Module.exports对象的一个引用(reference) ^ 1，什么是引用？！…(: з」∠)',
                link: 'www',
                git: '1',
                pic: ['http://106.13.184.92/mallshop/img/swiper/banner3.png']
            },
            {
                id: 4,
                main: 'vue',
                title: 'demo3',
                link: 'www',
                git: '1',
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
                <div className="home_outer">
                    {
                        this.state.demoList.map((v, index) => {
                            return (
                                <a href={v.link} className="demo_item" key={v.id + index} style={{ backgroundImage: `url(${v.pic[0]})` }}>
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
                                            <a target="_blank" href={v.git}><span className="iconfont icon-GitHub">GitHub</span></a>
                                        </div>
                                    </div>
                                    <div className="bg"></div>
                                </a>
                            )
                        })
                    }
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