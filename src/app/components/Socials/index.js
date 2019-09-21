import React, {Component} from 'react';
import './styles/styles.scss';
import data from './data.js';

class Socials extends Component{

    mouseMove(e){
        let target = e.target.closest('a'),
            targetData = target.getBoundingClientRect(),
            targetIcon = target.querySelector('i'),
            offset = {
                x: ((e.pageX - window.scrollX) - (targetData.left + (targetData.width / 2))) / 4 * -1,
                y: ((e.pageY - window.scrollY) - (targetData.top + (targetData.height / 2))) / 4 * -1
            };
        target.style.transform = 'translate('+ offset.x +'px,'+ offset.y +'px) scale('+ 1.1 +')';
        target.style.webkitTransform = 'translate('+ offset.x +'px,'+ offset.y +'px) scale('+ 1.1 +')';
        document.querySelectorAll('.socials-item-icon').forEach((e, i) => {
            if(e !== target){
                e.style.transform = 'translate('+ offset.x / 2 +'px, '+ offset.y / 2 +'px) scale('+ 0.9 +')';
                e.style.webkitTransform = 'translate('+ offset.x / 2 +'px, '+ offset.y / 2 +'px) scale('+ 0.9 +')';
            }
        })
        targetIcon.style.transform = 'translate('+ offset.x +'px,'+ offset.y +'px) scale('+ 1.1 +')';
        targetIcon.style.webkitTransform = 'translate('+ offset.x +'px,'+ offset.y +'px) scale('+ 1.1 +')';
    }

    mouseLeave(e){
        document.querySelectorAll('.socials-item-icon').forEach((target, i) => {
            let targetIcon = target.querySelector('i');
            target.style.transform = 'translate(0px,0px) scale(1)';
            target.style.webkitTransform = 'translate(0px,0px) scale(1)';
            targetIcon.style.transform = 'translate(0px,0px) scale(1)';
            targetIcon.style.webkitTransform = 'translate(0px,0px) scale(1)';
        });
    }

    componentDidMount(){
        let items = document.querySelectorAll('.socials-item-icon'),
            self = this;
        items.forEach((item, index) => {
            item.addEventListener('mousemove', self.mouseMove);
            item.addEventListener('mouseleave', self.mouseLeave);
        })
    }

    componentWillUnmount(){
        let items = document.querySelectorAll('.socials-item-icon'),
            self = this;
        items.forEach((item, index) => {
            item.removeEventListener('mousemove', self.mouseMove);
            item.removeEventListener('mouseleave', self.mouseLeave);
        })
    }

    render(){
        let className = 'socials';
        if(this.props.vertical) className += ' socials__vertical';
        if(this.props.light) className += ' socials__light';
        return(
            <div className={className}>
                {data.map((item, index) => {
                    return(
                        <div key={index} className="socials-item">
                            <a
                                className={'socials-item-icon socials-item-icon__'+item.systemName}
                                href={item.link}
                                target="_blank"
                            >
                                <i>
                                    <span></span>
                                </i>
                                {item.name}
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Socials;