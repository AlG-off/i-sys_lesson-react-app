import React from 'react';
import PropTypes from 'prop-types';

import './TBody.css';

function processingRow(item = []) {
    return (
        Object.keys(item).map((col, i) => (
// eslint-disable-next-line react/no-array-index-key
            <td key={i} className={`userTable__col-${i}`}>
                { col === 'avatar'
                    ? <img className='userTable__user-avatar' src={item[col]} alt='avatar' />
                    : item[col]
                }
            </td>
        ))
    );
}

const TBody = ({ items }) => (
    <tbody>
        {
        items.map((item, index) => (
// eslint-disable-next-line react/no-array-index-key
            <tr key={index}>
                {processingRow(item)}
            </tr>
        ))
    }
    </tbody>
);

TBody.propTypes = {
// eslint-disable-next-line react/require-default-props
    items: PropTypes.array
};

export default TBody;
