import React from 'react';
import PropTypes from 'prop-types';

const THead = ({ columns }) => (
    <thead className='userTable__header'>
        <tr>
            {
                columns.map((item, i) => (
                    <th
                        className={`userTable__col-${i}`}
                        key={i} // eslint-disable-line react/no-array-index-key
                    >
                        { item }
                    </th>
                ))
            }
        </tr>
    </thead>
);

THead.propTypes = {
    columns: PropTypes.array
};

THead.defaultProps = {
    columns: []
};

export default THead;
