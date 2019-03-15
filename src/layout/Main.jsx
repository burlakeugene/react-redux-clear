import React, {Component} from 'react';
import './styles/styles.scss';

let Layout = function(components) {
    return class extends Component{
        render() {
            let {main, sidebar, header} = components;
            return (
                <div className="app">
                    {sidebar &&
                        <div className="app-sidebar">
                            {
                                    (typeof(sidebar) === 'function' ?
                                    <components.sidebar />
                                    :
                                    sidebar()
                                )
                            }
                        </div>
                    }
                    <div className="app-main">
                        {header &&
                            (typeof(header) === 'function' ?
                                <components.header />
                                :
                                header()
                            )
                        }
                        {main &&
                            (typeof(main) === 'function' ?
                                <components.main />
                                :
                                main()
                            )
                        }
                    </div>
                </div>
            )
        }
    }
}

export default Layout;
