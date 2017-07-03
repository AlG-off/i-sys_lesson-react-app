import axios from 'axios';

import {
    GET_USERS
} from '../constants/actionTypes';

export default function getUsers() {
    return dispatch => {
        axios.get('http://dselkirk.getsandbox.com/users')
            .then(res => {
                const users = res.data;

                users.length = 50;

                dispatch({
                    type: GET_USERS,
                    payload: users
                });
            })
            .catch(err => {
                console.error(err); // eslint-disable-line no-console
            });
    };
}
