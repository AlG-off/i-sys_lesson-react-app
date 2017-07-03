import React from 'react';
import PropTypes from 'prop-types';
import Resizer from './Resizer.jsx';

import './THead.css';

const THead = ({ columns = [] }) => (
    <thead className='userTable__header'>
        <tr>
            {
                columns.map((item, i) => (
                    <th
                        className={`userTable__col-${i}`}
                        key={i} // eslint-disable-line react/no-array-index-key
                        ref={ref => { this[`col${i}`] = ref; }}
                    >
                        { item }
                        <Resizer target={this[`col${i}`]} />
                    </th>
                ))
            }
        </tr>
    </thead>
);

THead.propTypes = {
// eslint-disable-next-line react/require-default-props
    columns: PropTypes.array
};

export default THead;
