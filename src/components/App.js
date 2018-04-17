import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from './page/Header';
import Routes from '../routes';
import NotificationContainer from '../modules/notification/Container';

@withRouter
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container wrapper">
                <Header />
                <Routes />
                <NotificationContainer style={{ 'z-index': 9999 }} />
            </div>
        );
    }
}

const propTypes = {
    notifications: PropTypes.array,
};
const defaultProps = {};

App.propTypes = propTypes;
App.defaultProps = defaultProps;