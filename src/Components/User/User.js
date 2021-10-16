import React, { Component } from 'react'

export class User extends Component {
    // constructor(){
    //     super();
    // }
    state = {
        data : [{}],
    }

    getUserData = async()=>{
        const URL = 'https://jsonplaceholder.typicode.com/users'
       const response =  await fetch(URL);
       const data =   await response.json();
    // console.log(data);
    this.setState({data})
    }
    
    componentDidMount(){
        this.getUserData();
    }

    render() {
        const userData =  this.state.data.map((user)=>(
           
            <tr key={user.id}>
                {/* {console.log(user)} */}
                
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address?.city}</td>
                <td>{user.phone}</td>
                <td> <a href={`http://www.${user.website}`} target="_blank" >{user.website}</a></td>
                 </tr> 
         ))

        return (
            <div>
                
                <div className="container mt-5">
                    <table className="table table-striped table-hover">
                        <thead >
                            <th>Id</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </thead>
                        <tbody>
                           
                            {
                               userData
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default User
