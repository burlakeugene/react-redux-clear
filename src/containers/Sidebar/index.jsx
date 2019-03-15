import React, { Component } from 'react'
import Logo from '../../components/Logo';
import Socials from '../../components/Socials';
import Waves from '../../components/Waves';
import './styles/styles.scss';

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <Waves />
                <div className="sidebar-inner">
                    <div className="sidebar-top">
                        <Logo />
                    </div>
                    <div className="sidebar-bottom">
                        <Socials vertical />
                    </div>
                </div>
            </aside>
        )
    }
}

export default Sidebar;