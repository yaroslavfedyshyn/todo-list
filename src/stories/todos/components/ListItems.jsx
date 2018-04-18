import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {
            item
        } = this.props;

        return (
            <div className="media text-muted pt-3">
                <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">{item.summary}</strong>
                        <div className="actions">
                            <span>Delete</span>
                            <span>Done</span>
                        </div>
                    </div>
                    <span className="d-block">{item.details}</span>
                </div>
            </div>
        );
    }
}

const propTypes = {
    item: PropTypes.object,
};
const defaultProps = {};

ListItems.propTypes = propTypes;
ListItems.defaultProps = defaultProps;
