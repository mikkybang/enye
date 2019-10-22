import React, { Component } from 'react';
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class UserForm extends Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            hobby: '',
            date_of_birth: '',
            age: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createUser = this.createUser.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDateChange(date) {
        var age = moment().diff(date, 'years');
        this.setState({
          date_of_birth: date,
          age: age
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            hobby: this.state.hobby,
            date_of_birth: this.state.date_of_birth,
            age: this.state.age
        }
        this.createUser(user);
        
    }

    createUser(user) {
        var existingEntries = JSON.parse(localStorage.getItem("users"));
        if(existingEntries == null) existingEntries = [];
        localStorage.setItem("user", JSON.stringify(user));
        // Save allEntries back to local storage
        existingEntries.push(user);
        localStorage.setItem("users", JSON.stringify(existingEntries));
    }


    render() {
        return (
            <div className="container" style={{ marginTop: '50px', width: '100%' }}>
                <h2 style={{ marginBottom: '40px' }}>Create User</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                <div className=" col-lg-4">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            name="first_name"
                            onChange={this.handleInputChange}
                            value={this.state.first_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                            name="last_name"
                            onChange={this.handleInputChange}
                            value={this.state.last_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hobby</label>
                        <input
                            type="text"
                            placeholder="Hobby"
                            className="form-control"
                            name="hobby"
                            onChange={this.handleInputChange}
                            value={this.state.hobby}
                        />
                    </div>
                    </div>
                    <div className=" col-lg-4">
                    <div className="form-group">
                        <label>Date of birth MM/DD/YYYY:</label>
                        <DatePicker
                            selected={this.state.date_of_birth}
                            onChange={this.handleDateChange}
                        />
                    </div>
                    </div>

                    <div className=" col-lg-4">
                    <div className="form-group">
                    <label>Age</label>
                    <input
                            type="text"
                            placeholder="Age"
                            className="form-control"
                            name="hobby"
                            onChange={this.handleInputChange}
                            value={this.state.age}
                        />
                    </div>
                    </div>
                    <div className="col-lg-4">
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}





export default UserForm