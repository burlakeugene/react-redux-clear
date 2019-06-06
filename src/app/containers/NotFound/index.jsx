import React, {Component} from 'react';

export default () => {
    return (
        <div className="notfound-wrapper">
            <div className="notfound-header">
                <h3>404</h3>
                <small>
                    Page Not Found.
                </small>
            </div>
            <div className="notfound-text">
                Sorry, but the page you are looking for has note been found. Try checking the
                URL for error, then hit the refresh button on your browser or try found
                something else in our app.
            </div>
        </div>
    )
}
