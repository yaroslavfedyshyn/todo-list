import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortId from 'shortid';
import {
    reduxForm,
    Field,
    getFormSyncErrors,
    reset,
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
    onSubmit: (values, dispatch, formState) => {
        dispatch(createNewTodoRequested({
            item: {
                ...values,
                id: shortId.generate(),
            },
        }));

        formState.reset();
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
                <div className="row">
                    <div className="col-md-10">
                        <Field
                            name="summary"
                            component={TextInput}
                            placeholder="Task Summary"
                        />
                    </div>
                    <div className="col-md-2 submit-button-holder">
                        <button type="submit" className="btn grey submit-button">Submit</button>
                    </div>
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
