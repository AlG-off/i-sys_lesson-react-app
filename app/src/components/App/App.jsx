import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getUsers from '../../actions/getUsers';

import Table from '../Table/Table.jsx';
import logo from '../../logo.svg';
import './App.css';

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => {
        dispatch(getUsers());
    }
});

class App extends Component {
    static propTypes = {
        users: PropTypes.array, // eslint-disable-line react/require-default-props
        getUsers: PropTypes.func // eslint-disable-line react/require-default-props
    }

    render() {
        const { users = [], getUsers } = this.props;
        const tableColumn = users.length && Object.keys(users[0])
                .filter(col => {
                    const regexp = /first_name|last_name|avatar/i;

                    return regexp.test(col);
                })
                .sort();
        const tableData = users.map(user => {
            const filteredUser = {};

            tableColumn.forEach(item => {
                filteredUser[item] = user[item];
            });

            return filteredUser;
        });

        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Welcome to React</h2>
                </div>
                <Table data={tableData} getData={getUsers} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
const columns = Object.keys(usersData[0]).filter(item => {
    const regexp = /first_name|last_name|avatar/i;

    return regexp.test(item);
}).sort();*/
