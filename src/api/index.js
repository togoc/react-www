import axios from 'axios'
import apis from './apis'
let times = 0
const ajax = axios.create({
    baseURL: apis.baseURL
})

ajax.interceptors.request.use(request => {
    times++
    return request
}, error => {
    times--
    return Promise.reject(error)
})

ajax.interceptors.response.use(response => {
    times++
    return response
}, error => {
    times--
    return Promise.reject(error)
})



/**
 * { password:xxx,username:xxx }
 * @param {Object} formData 接收一个包含用户名密码的对象
 */
export const login = async (formData) => {
    return ajax.post('/login', formData).then(res => res.data)
}



export const getChartData = async () => {
    return ajax.get('/index/chart').then(res => res.data)
}


