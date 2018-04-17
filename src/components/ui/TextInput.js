import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import autobind from 'autobind-decorator';
import {
    DEFAULT_ALLOWED_BUTTONS_TO_CLICK,
} from '../../constants';

class TextInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    @autobind
    handleKeyUp(event) {
        const {
            email,
        } = this.props;

        if (email) {
            event.target.value = event.target.value.trim();
        }
    }

    @autobind
    handleKeyPress(event) {
        let {
            allowedCharacters,
        } = this.props;
        allowedCharacters = allowedCharacters ? allowedCharacters.concat(DEFAULT_ALLOWED_BUTTONS_TO_CLICK) : [];

        if (allowedCharacters.length && !allowedCharacters.includes(event.key)) {
            event.preventDefault();
        }
    }

    render() {
        const {
            input,
            meta: {
                touched,
                error,
            },
            readOnly,
            password,
            disableAutoComplete,
        } = this.props;
        const showError = touched && error;
        const type = password ? 'password' : 'text';
        let {
            label,
        } = this.props;

        label = label || '';

        return (
            <div
                className={
                    classNames(
                        'input-holder',
                        'animate',
                        { touched: input.value },
                        { disabled: readOnly },
                        { 'has-error': showError },
                    )
                }
            >
                {
                    disableAutoComplete
                        ? (<input type={type} name={input.name} hidden="hidden" disabled />)
                        : null
                }
                <input
                    {...input}
                    id={input.name}
                    className="animate-input"
                    type={type}
                    ref={node => { this.inputField = node; }}
                    readOnly={readOnly}
                    onKeyDown={this.handleKeyPress}
                    onKeyUp={this.handleKeyUp}
                />
                <label
                    className="animate-label"
                    htmlFor={input.name}
                >{label}</label>
                <span className="bar" />
                {showError && <span className="error-text">{error}</span>}
            </div>
        );
    }

}

TextInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    label: PropTypes.string,
    password: PropTypes.bool,
    readOnly: PropTypes.bool,
    disableAutoComplete: PropTypes.bool,
    allowedCharacters: PropTypes.array,
    email: PropTypes.bool,
};

export default TextInput;
