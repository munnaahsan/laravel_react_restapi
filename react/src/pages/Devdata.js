
import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import axios from "axios";


class Devdata extends Component {

   state = {
       datas: [],
       loading: true
   }

  async componentDidMount(){
      const getData = await axios.get('http://127.0.0.1:8000/api/get-data');
      if(getData.data.status === 200){
          this.setState({
              datas: getData.data.datas,
              loading: false,
          })
      }
   }


    render() {
       var dataHtmlTable = "";
       if(this.state.loading) {
           dataHtmlTable =<tr><td colSpan="7"><h2>Loading</h2></td></tr>;
       } else {
           dataHtmlTable = this.state.datas.map((item) => {
               return(
                   <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.email}</td>
                       <td>{item.phone}</td>
                       <td>{item.address}</td>
                       <td>{item.age}</td>
                       <td>
                           <Link to={`edit-datas/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                       </td>
                       <td>
                          <button type="button" className="btn btn-danger btn-sm">Delete</button>
                       </td>
                   </tr>
               );
           });
       }
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
                        <div className="card-body mt-2">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Age</th>
                                        <th>Action</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataHtmlTable}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

 export default  Devdata;