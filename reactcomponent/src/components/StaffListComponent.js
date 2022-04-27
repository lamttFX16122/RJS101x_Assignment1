import React, { Component } from "react";

class StaffList extends Component {
    staffClick=(value)=>{
        this.props.onReceiveStaff(value);
    }
  render() {
    let list = this.props.listStaff.map((value) => {
      return (
        <div key={value.id} className={this.props.column}>
          <div className="card text-white bg-info cart-list" onClick={()=>this.staffClick(value)}>
            <div className="card-body">
              <p className="card-text">
                {value.name}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row m-2">{list}</div>;
  }
}

export default StaffList;
