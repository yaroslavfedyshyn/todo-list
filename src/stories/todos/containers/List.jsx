import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '../components/ListItems';

@connect(
    (state) => ({
        items: state.todos.list.items,
    }),
)
export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderItems() {
        const {
            items,
        } = this.props;

        return items.map(item => {
            return (
                <ListItem
                    item={item}
                />
            );
        });
    }

    render() {
        return (
            <div className="list-container">
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Tasks</h6>
                    {this.renderItems()}
                    <small className="d-block text-right mt-3">
                        <a href="#">All suggestions</a>
                    </small>
                </div>
            </div>
        );
    }
}

const propTypes = {
    items: PropTypes.array,
};
const defaultProps = {};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
