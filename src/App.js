import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Login, Admin, Register, Home } from './pages'
import "./App.less"
class App extends React.Component {
  render() {
    let token = localStorage.getItem('USER_TOKEN')
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Route render={(props) => {
            //可以通过render方法传值
            //可以判断是否登录返回页面
            if (!token)
              return <Redirect to="/login" />
          }} path="/" /> */}
          <Switch>

            {/* <Route path="/index/home" component={Home} ></Route>
            <Route path="/index/admin" component={Admin} ></Route>
            <Route path="/index/login" component={Login}  ></Route>
            <Route path="/index/register" component={Register}  ></Route>
            <Redirect to="/index/home" from="/index" /> */}

            <Route path="/home" component={Home} ></Route>
            <Route path="/admin" component={Admin} ></Route>
            <Route path="/login" component={Login}  ></Route>
            <Route path="/register" component={Register}  ></Route>
            <Redirect to="/home" from="/" />

          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}






export default App;
