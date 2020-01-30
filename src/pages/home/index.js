import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import * as Actions from '../../store/actions/article'
class index extends Component {
    componentDidMount() {
        let token = localStorage.getItem('USER_TOKEN')
        console.log(token)
    }
    render() {
        let token = localStorage.getItem('USER_TOKEN')
        console.log(token)
        // setTimeout(() => {
        //     console.log(localStorage.getItem('USER_TOKEN'))
        // }, 1000);
        // if (!token)
        //     return <Redirect to="/login" />
        return (
            <div>
                index
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