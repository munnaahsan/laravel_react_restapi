
import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


class Devdata extends Component{
    render() {
        return(
            <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-header">
                            <div>
                                <h3>Dev Data
                                    <Link to={'add-dev'} className="btn btn-danger float-end btn-sm">Get Dev</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

 export default  Devdata;