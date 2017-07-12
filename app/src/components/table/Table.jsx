import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import THead from './additional/THead.jsx';
import TBody from './additional/TBody.jsx';

export default class Table extends PureComponent {
    static propTypes = {
        data: PropTypes.array, // eslint-disable-line react/require-default-props
        getData: PropTypes.func // eslint-disable-line react/require-default-props
    };

    componentDidMount() {
        this.props.getData();
    }

    render() {
        const { data } = this.props;

        if (data.length === 0) {
            return (
                <div>Загрузка данных...</div>
            );
        }

        const columns = Object.keys(data[0]);

        return (
            <div className='container'>
                <table className='userTable'>
                    <THead columns={columns} />
                    <TBody items={data} />
                </table>
            </div>
        );
    }
}
