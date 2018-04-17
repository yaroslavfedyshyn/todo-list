import {
    CAN_NOT_BE_BLANK,
} from '../../../constants/errorMessages';

export default (values) => {
    const {
        summary,
    } = values;
    const errors = {};

    if (!summary) {
        errors.summary = CAN_NOT_BE_BLANK;
    }

    return errors;
};
