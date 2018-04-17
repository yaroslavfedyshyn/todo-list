import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect(
    (state) => ({
        state,
    }),
    {},
)
export default class Base extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                </div>
            </div>
        );
    }
}

const propTypes = {};
const defaultProps = {};

Base.propTypes = propTypes;
Base.defaultProps = defaultProps;
