import React,{Component} from 'react';
import './toggle-app.css';

class ToggleApp extends Component{
    constructor(){
        super();
this.state={
    title:'Toggle App',
    initials:'JS',
    isToggleOn:true
};
this.handleOnClick=this.handleOnClick.bind(this);
    }

handleOnClick (){
   this.setState(
   ( prevState)=> ({ isToggleOn:!prevState.isToggleOn})
   ) ;
}

    render(){
        const {title,initials,isToggleOn}=this.state;
        return(
            <>
            <div className='app-container'>
                <div className='app-head'>
                    <h1><span className='initials'>{initials}</span>
                    <span className='title'>{title}</span></h1>
                </div>
                <div className='app-body'>
<p>When you click the button, the button state will change using toggle method.</p>
<button onClick={this.handleOnClick}>
    {isToggleOn ? "ON" : "OFF"}
</button>
                </div>
                 </div>
            </>
        );
    }
}

export default ToggleApp;