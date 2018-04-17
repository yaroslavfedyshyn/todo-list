import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {
            input,
            meta: {
                touched,
                error,
            },
            placeholder = '',
        } = this.props;
        const showError = touched && error;

        return (
            <div className="mb-3">
                <label htmlFor={input.name}>{placeholder}</label>
                <div className="input-group">
                    <input
                        {...input}
                        type="text"
                        className="form-control"
                        id={input.name}
                    />
                </div>
                {showError && <span className="text-danger">{error}</span>}
            </div>
        );
    }
}

TextInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    placeholder: PropTypes.string,
};

export default TextInput;
