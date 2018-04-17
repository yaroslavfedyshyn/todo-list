import {
    error,
    warning,
    info,
    success,
} from 'react-notification-system-redux';

const defaultMessage = 'N/A';
const defaultOptions = {
    position: 'tc',
    autoDismiss: 4,
};

export const successNotification = (message = defaultMessage) => (dispatch) => {
    return dispatch(success({
        ...defaultOptions,
        title: 'Success',
        message,
    }));
};

export const warningNotification = (message = defaultMessage) => (dispatch) => {
    return dispatch(warning({
        ...defaultOptions,
        title: 'Warning',
        message,
    }));
};

export const infoNotification = (message = defaultMessage) => (dispatch) => {
    return dispatch(info({
        ...defaultOptions,
        title: 'Information',
        message,
    }));
};

export const errorNotification = (message = defaultMessage) => (dispatch) => {
    return dispatch(error({
        ...defaultOptions,
        title: 'Error',
        message,
    }));
};
