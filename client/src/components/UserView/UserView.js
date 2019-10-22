import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import './UserView.css';

class UserView extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            message: '',
        }
        this.getallUsers = this.getallUsers.bind(this)
    }

    componentWillMount() {
           const users = this.getallUsers()
           this.setState({
               users: users,
               message: "Users Found"
           })
    }

    getallUsers() {
        const users = JSON.parse(localStorage.getItem('users'));
        return users
    }

    render() {
        const {users} = this.state
        return (
            <div className="container" style={{ Width: '100%' }}>
                <div className="text-center col col-md-6 col-sm-12">
                    <span>{this.state.message}</span>
                </div>
                {
                    users.map( user => 
          <Card title="User"style={{ width: 300 }}>
                        <p>First Name{user.first_name}</p>
                        <p>Last Name{user.last_name}</p>
                        <p>Hobby: {user.hobby}</p>
                        <p>Birthday: {user.date_of_birth}</p>
                        <p>age: {user.age}</p>
            </Card>
                    )
                }

                
            </div>


        )
    }
}

export default UserView