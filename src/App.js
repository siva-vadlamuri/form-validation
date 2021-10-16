import React from 'react'
import FormValidation from './Components/FormValidation'
import Header from './Components/Header/Header'
import LifeCycle from './Components/LifeCycle'
import User from './Components/User/User'
import UserLocation from './Components/UserLocation'

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {/* <h2>Getting a Physical Location of a user</h2> */}
                {/* <UserLocation/> */}
                <FormValidation/>
                {/* <LifeCycle/> */}
                {/* <User/> */}
            </div>
        )
    }
}

export default App
