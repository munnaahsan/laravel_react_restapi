import React, { Component } from "react";

class St extends Component {

    componentDidMount() {
        console.log(this.props);
        // const st = this.props.match.params.idd;
    }

    render() {
        return(
            <div className="container">
                <h2>Route Params</h2>
            </div>
        )
    }
}

export default St;