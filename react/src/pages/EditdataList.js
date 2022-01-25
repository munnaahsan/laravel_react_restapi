import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'

class EditdataList extends Component{
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
    updateData = async (e) => {
        e.preventDefault();

    }

    async componentDidMount(){
        const res = this.props;
        console.log(res);

    }




    render() {

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-header">
                            <button>
                                <Link to="/" className="btn btn-info">Back</Link>
                            </button>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.updateData}>
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

export default EditdataList;