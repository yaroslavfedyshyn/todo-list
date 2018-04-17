import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    calculateHeightDependsOnContent(event) {
        const { target } = event;
        let height = target.scrollHeight;

        if (height < 300) {
            height = 300;
        }

        target.style.height = '1px';
        target.style.height = `${height}px`;
    }

    render() {
        const {
            input,
            meta: {
                touched,
                error,
            },
        } = this.props;

        return (
            <div>
                <textarea
                    {...input}
                    ref={node => { this.textareaElement = node; }}
                    onMouseOver={this.calculateHeightDependsOnContent}
                    onChange={event => {
                        this.calculateHeightDependsOnContent(event);

                        input.onChange(event.target.value);
                    }}
                >{input.value}</textarea>
                {touched && error && <span className="error-text">{error}</span>}
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
