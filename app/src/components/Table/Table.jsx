import React, { PureComponent } from 'react';
import axios from 'axios';

import THead from './additional/THead.jsx';
import TBody from './additional/TBody.jsx';

export default class Table extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            usersData: []
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get('http://dselkirk.getsandbox.com/users')
            .then(res => {
                const data = res.data;

                data.length = 50;
                this.setState({ usersData: data });
            })
            .catch(err => {
                console.error(err); // eslint-disable-line no-console
            });
    };


    render() {
        const { usersData } = this.state;

        if (usersData.length === 0) {
            return (
                <div>Загрузка данных...</div>
            );
        }

        const columns = Object.keys(usersData[0]).filter(item => {
            const regexp = /first_name|last_name|avatar/i;

            return regexp.test(item);
        }).sort();

        return (
            <div className='container'>
                <table className='userTable'>
                    <THead columns={columns} />
                    <TBody items={usersData} />
                </table>
            </div>
        );
    }
}
