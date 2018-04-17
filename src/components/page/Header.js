import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 header-text">Simple Todos App</div>
                    </div>
                </div>
            </header>
        );
    }
}

const propTypes = {};
const defaultProps = {};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
