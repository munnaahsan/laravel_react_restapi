import React, {Component} from 'react';
import axios from "axios";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class DevdataList extends Component{
    state = {
        name: '',
        phone: '',
        course: '',
        address: '',
        email: '',
        age: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveData = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/add-data', this.state, {
            headers: { "Content-Type": "aplication/json" },
        });

       console.log(this.state);
        if(res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                name: '',
                phone: '',
                course: '',
                address: '',
                email: '',
                age: ''
            });
        }
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-header">
                            <h3>Data</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.saveData}>
                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input type="text"
                                           name="name"
                                           className="form-control"
                                           onChange={this.handleInput}
                                           value={this.state.name}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Course</label>
                                    <input type="text"
                                           name="course"
                                           className="form-control"
                                           onChange={this.handleInput}
                                           value={this.state.course}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Phone</label>
                                    <input type="number"
                                           name="phone"
                                           className="form-control"
                                           onChange={this.handleInput}
                                           value={this.state.phone}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="email"
                                           name="email"
                                           className="form-control"
                                           onChange={this.handleInput}
                                           value={this.state.email}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Address</label>
                                    <input type="text"
                                           name="address"
                                           className="form-control"
                                           onChange={this.handleInput}
                                           value={this.state.address}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Age</label>
                                    <input type="number"
                                           name="age"
                                           className="form-control"
                                           onChange={this.handleInput}
                                           value={this.state.age}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit"
                                           className="btn btn-primary float-end"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DevdataList;