import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Spin, message } from 'antd';
import { login } from '../../api'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions'
import './index.less'
import logo from './logo192.png'
class index extends Component {
    state = {
        isLoading: false
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return
            this.setState({
                isLoading: true
            }, async () => {
                const { status, token } = await login(values)
                this.setState({
                    isLoading: false
                })
                status === 0 && message.error('用户名或密码错误!')
                if (status === 1) {
                    this.props.dispatch(signIn(token))
                    this.props.history.replace('/home')
                    localStorage.setItem('USER_TOKEN', token)
                    message.success('登录成功!')
                }
            })
        });
    };
    componentDidMount() {
        localStorage.removeItem('USER_TOKEN')
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Spin tip="登录中... " spinning={this.state.isLoading}>
                <div className="login">
                    <div className="login_header">
                        <img src={logo} alt="图片" />
                        商品管理系统
                </div>
                    <div className="login_form">
                        <div className="login_context">
                            <h2>用户登录</h2>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [
                                            { required: true, message: '必须输入用户名 !' },
                                            { min: 3, message: '用户名最少 3 位 !' },
                                            { max: 18, message: '用户名最长 18 位 !' },
                                            { pattern: /^[A-Z0-9_]+$/ig, message: '请输入正确的用户名 !' }
                                        ],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            autoComplete="username"
                                            placeholder="用户名"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{
                                            min: 3,
                                            max: 16,
                                            required: true,
                                            message: '请输入正确的密码 !'
                                        }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="密码"
                                            autoComplete="password"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>保持登录</Checkbox>)}
                                    <a className="login-form-forgot" href="/a">
                                        忘记密码
                                </a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                </Button>
                                    没有账号?&nbsp;<a href="/register">现在注册!</a>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Spin>
        )
    }
}



const WrappedNormalLoginForm = Form.create({ name: 'login' })(index);

// export default WrappedNormalLoginForm


export default connect()(WrappedNormalLoginForm)