import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import {
    deleteTodoRequested,
    doneTodoRequested,
} from '../actionCreators';

@connect(
    (state) => ({
        items: state.todos.list.items,
    }),
    {
        deleteTodoRequested,
        doneTodoRequested,
    },
)
export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAll: false,
        };
    }

    renderItems() {
        const {
            items,
            deleteTodoRequested,
            doneTodoRequested,
        } = this.props;
        const {
            showAll,
        } = this.state;
        const listItems = showAll
            ? items
            : items.filter(o => !o.done);

        return listItems.map(item => {
            return (
                <ListItem
                    key={item.id}
                    item={item}
                    deleteTodo={deleteTodoRequested}
                    doneTodo={doneTodoRequested}
                />
            );
        });
    }

    render() {
        const {
            showAll,
        } = this.state;
        const text = showAll
            ? 'Show uncompleted'
            : 'Show all (completed/uncompleted)';

        return (
            <div className="list-container">
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Tasks</h6>
                    {this.renderItems()}
                    <small className="d-block text-right mt-3">
                        <span
                            onClick={() => {
                                this.setState(prevState => ({
                                    showAll: !prevState.showAll,
                                }));
                            }}
                        >{text}</span>
                    </small>
                </div>
            </div>
        );
    }
}

const propTypes = {
    items: PropTypes.array,
    deleteTodoRequested: PropTypes.func,
    doneTodoRequested: PropTypes.func,
};
const defaultProps = {};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
