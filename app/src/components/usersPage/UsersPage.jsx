import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getAllUsers from '../../actions/getUsers';
import getPartUsers from '../../actions/getPartUsers';

import Table from '../table/Table.jsx';
import logo from '../../logo.svg';
import './App.css';

const sourceActions = {
    getAllUsers,
    getPartUsers
};

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(sourceActions, dispatch)
});

class App extends Component {
    static propTypes = {
        users: PropTypes.array, // eslint-disable-line react/require-default-props
        actions: PropTypes.func // eslint-disable-line react/require-default-props
    }

    render() {
        const { users = [], actions } = this.props;
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
