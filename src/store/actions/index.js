import * as http from '../../api'
import type from '../type'
import { message } from 'antd';
import jwt_decode from 'jwt-decode'

export const signIn = (token) => {
    return {
        type: type.SET_USER,
        data: jwt_decode(token)
    }
}


// export const like = (commentId, uname = 'Han Solo') => dispatch => {
//     http.like(commentId, uname).then(res => {
//         if (res.status === 200) {
//             dispatch({
//                 type: actionType.ADD_COMMENT_LIKED,
//                 commentId,
//                 data: res.data[0]
//             })
//         }
//     }).catch(err => {
//         console.log(err)
//     })
// }