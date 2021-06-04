import React from 'react';

const display = (props) => {
    return (
        <input id="display" type="text" className="form-control result" placeholder={props.result} disabled="disabled" />
    )
}
export default display;