import React from 'react';

export default props => {
    return (
        <input id="display" type="text" className="form-control result" placeholder={props.result} disabled="disabled" />
    )
}