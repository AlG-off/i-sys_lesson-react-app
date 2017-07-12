import axios from 'axios';

import {
    GET_ALL_USERS
} from '../constants/actionTypes';

export default function getUsers() {
    return dispatch => {
        axios.get('http://dselkirk.getsandbox.com/users')
            .then(res => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: res.data
                });
            })
            .catch(err => {
                console.error(err); // eslint-disable-line no-console
            });
    };
}
