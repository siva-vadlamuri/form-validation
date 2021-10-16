import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(){
        super();
        console.log('Constructor called ')
        // Never make a Network call here 
        // You can intialize the state 
    }
    // static getDerivedStateFromProps(state,props)

    componentDidMount(){
        // You can make an Side Effect 
        // You can make an HTTP (Network) calll
        console.log('Component Did Mount Called [LifeCycle]')
        
    }
    componentDidUpdate(){
        // When you updating the state or propss
        // I made a network call 
        // When a make a network call i need update the state 
        // When you updating the state componentDidUpdate will call again 

        // We need to check the previousState and CurrentState if both are different then only make a 
        // network call 
    }
    componentWillUnmount(){
        // If you clean up the resources 
        //  click, resize  
        // On Mounting we attached an Event Listner 
        // clean up the code --> removeTheEventListner 
    }

    render() {
        console.log('Render Method Called');
        // It is used to return JSX 
        // Except this it should not do anything
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycle
