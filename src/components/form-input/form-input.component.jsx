import React from 'react';
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">

            <input
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
            {
                label ?
                    //Selectively render String interpolated value
                    //I.E if value exists then apply 'shrink' else null
                    //All labels will have "form-input-label"
                    (<label className={`${otherProps.value.length} ? 'shrink' : '' form-input-label`} >
                        {label}
                    </label>)
                    : null
            }
        </div>);
}

export default FormInput; 