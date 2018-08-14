// Higher order component (HOC) - A component (HOC) that renders another component (Regular Component).

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Some text is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isLoggedIn ? (
                <WrappedComponent {...props} />
            ): (
                <p>Please Login</p>
            )}
        </div>
    );
}

const AuthInfo = requireAuthentication(AdminInfo);

ReactDOM.render(<AuthInfo isLoggedIn={true} isAdmin={true} info="This are the details" />, document.getElementById('app'));