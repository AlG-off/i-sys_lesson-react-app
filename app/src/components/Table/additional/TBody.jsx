import React from 'react';
import PropTypes from 'prop-types';

const TBody = ({ items }) => (
    <tbody>
        {
        items.map(item => (
            <tr key={item.id}>
                <td className='userTable__col-0'>
                    <img className='userTable__user-avatar' src={item.avatar} alt='avatar' />
                </td>
                <td className='userTable__col-1'>
                    {item.first_name}
                </td>
                <td className='userTable__col-2'>
                    {item.last_name}
                </td>
            </tr>
        ))
    }
    </tbody>
);

TBody.propTypes = {
    items: PropTypes.array
};

TBody.defaultProps = {
    items: []
};

export default TBody;
