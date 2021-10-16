import React from 'react'



export class UserLocation extends React.Component {
    
    
    state = {
        lat : null,
        lng : null,
    }

   
    render() {
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords.latitude)
            this.setState({
                lat : position.coords.latitude,
                lng : position.coords.longitude,
            })
        })
        
        return (
            <div>
                

               {
                   this.state.lat && this.state.lng ? (

                <div className="text-center">
                    <p>User Latitute is : {this.state.lat}</p>
                    <p>User Longituted is : {this.state.lng}</p>
                </div>
                   ):
                   <p className="text-center text-danger">Please Allow The Location for better Expreience</p>
               }


            </div>
        )
    }
}

export default UserLocation
