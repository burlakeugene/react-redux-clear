import React, { Component } from 'react'
import './styles/styles.scss';

class Cursor extends Component {
    constructor(){
        super();
        this.state = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            state: 'default'
        }
        this.move = this.move.bind(this);
        this.down = this.down.bind(this);
        this.up = this.up.bind(this);
    }
    componentDidMount(){
        this.addCursor();
    }
    componentWillUnmount(){
        this.removeCursor();
    }
    addCursor(){
        document.body.classList.add('custom-cursor');
        document.addEventListener('mousemove', this.move);
        document.addEventListener('mousedown', this.down);
        document.addEventListener('mouseup', this.up);
        document.addEventListener('touchstart', this.down);
        document.addEventListener('touchend', this.up);
    }
    removeCursor(){
        document.body.classList.remove('custom-cursor');
        document.removeEventListener('mousemove', this.move);
        document.removeEventListener('mousedown', this.down);
        document.removeEventListener('mouseup', this.up);
        document.removeEventListener('touchstart', this.down);
        document.removeEventListener('touchend', this.up);
    }
    checkCursorTarget(target, tag, state){
        if(
            target.tagName === tag ||
            target.closest(tag)
        ){
            this.changeCursorState(state);
            return true;
        }
        return false;
    }
    changeCursorState(state){
        state && this.setState({
            state
        });
    }
    checkCursorState(e){
        let {target} = e;
        if(!target) return;
        if(this.checkCursorTarget(target, 'a', 'link')) return;
        if(this.checkCursorTarget(target, 'body', 'default')) return;
    }
    move(e){
        this.checkCursorState(e);
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    down(e){
        this.changeCursorState('click');
    }
    up(e){
        this.checkCursorState(e);
    }
    render() {
        let {x, y, state} = this.state,
            styles = {
                left: x+'px',
                top: y+'px'
            };
        return (
            <div className="cursors">
                <div className="cursor cursor__mini" style={styles}></div>
                <div className={'cursor cursor__state cursor__state__'+state} style={styles}></div>
            </div>
        )
    }
}

export default Cursor;