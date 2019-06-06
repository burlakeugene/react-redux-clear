import React, {Component} from 'react';
import './styles/styles.scss';

let Layout = function(components) {
    return class extends Component{
        render() {
            let {main, sidebar, header, footer} = components;
            return (
                <div className="app">
                    {sidebar &&
                        <div className="app-sidebar">
                            <components.sidebar />
                        </div>
                    }
                    <div className="app-main">
                        {header &&
                            <components.header />
                        }
                        {main &&
                            <components.main />
                        }
                        {footer &&
                            <components.footer />
                        }
                    </div>
                </div>
            )
        }
    }
}

export default Layout;
