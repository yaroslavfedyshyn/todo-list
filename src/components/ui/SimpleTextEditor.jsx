import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextEditor extends Component {
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
            <div className="form-group">
                <label htmlFor={input.name}>{placeholder}</label>
                <textarea
                    {...input}
                    className="form-control"
                    id={input.name}
                    rows="3"
                >{input.value}</textarea>
                {showError && <span className="text-danger">{error}</span>}
            </div>
        );
    }

}

const propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
};
const defaultProps = {};

TextEditor.propTypes = propTypes;
TextEditor.defaultProps = defaultProps;
