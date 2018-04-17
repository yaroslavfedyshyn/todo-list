import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    reduxForm,
    Field,
    getFormSyncErrors,
} from 'redux-form';
import autobind from 'autobind-decorator';
import validate from '../form-validators/craete';
import TextInput from '../../../components/ui/TextInput';
import TextEditor from '../../../components/ui/SimpleTextEditor';
import {
    createNewTodoRequested,
} from '../actionCreators';

const formName = 'createTodo';
const syncErrorsSelector = getFormSyncErrors(formName);

@reduxForm({
    form: formName,
    validate,
    onSubmit: (values, dispatch) => {
        return dispatch(createNewTodoRequested({
            item: values,
        }));
    },
})
@connect(
    state => ({
        errors: syncErrorsSelector(state),
    }),
)
export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    @autobind
    handleFormSubmit(event) {
        const {
            errors = {},
            valid,
            touch,
            handleSubmit,
        } = this.props;

        event.preventDefault();

        if (!valid) {
            return touch(...Object.keys(errors));
        }

        handleSubmit();
    }

    render() {
        return (
            <form
                className="new-todo-container"
                onSubmit={this.handleFormSubmit}
            >
                <div className="">
                    <Field
                        name="summary"
                        component={TextInput}
                        placeholder="Task Summary"
                    />
                    <button type="submit">Submit</button>
                </div>
                <Field
                    name="details"
                    component={TextEditor}
                    placeholder="Task Details"
                />
            </form>
        );
    }
}

const propTypes = {
    errors: PropTypes.object,
    valid: PropTypes.bool,
    touch: PropTypes.func,
    handleSubmit: PropTypes.func,
};
const defaultProps = {};

Create.propTypes = propTypes;
Create.defaultProps = defaultProps;
