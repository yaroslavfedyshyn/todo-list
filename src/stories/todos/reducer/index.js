import defaultState from './defaultState';
import {
    FETCH_THERAPISTS_REQUESTED,
} from '../constants';

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_THERAPISTS_REQUESTED:
            return fetchTherapistsRequested(state, payload);

        default:
            return state;
    }
};

export const getQuickRegistrationData = state => {
    return state.form.therapistQuickRegistration.values;
};
