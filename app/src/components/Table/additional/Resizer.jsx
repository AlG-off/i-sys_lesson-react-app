import React from 'react';

import './Resizer.css';

const Resizer = ({ target }) => {
    const onMouseDown = e => {
        e.preventDefault();
        const
            resizerCoords = this.resizer.getBoundingClientRect().left,
            targetWidth = 0;

        console.log(resizerCoords);

        document.onmousemove = e => {
            const newLeft = e.pageX - resizerCoords;

            // console.log(newLeft);
            // if (newLeft < 0) {
            //     newLeft = 0;
            // }
            //
            // target.style.width = `${targetWidth + newLeft}px`;
        };

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        return false; // disable selection start (cursor change)
    };

    return (
        <div
            className='resizer'
            onMouseDown={onMouseDown}
            ref={ref => { this.resizer = ref; }}
            draggable='true'
        />
    );
};

export default Resizer;
