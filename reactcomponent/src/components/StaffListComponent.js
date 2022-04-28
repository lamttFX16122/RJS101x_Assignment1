import React, { Component } from "react";

class StaffList extends Component {
    staffClick=(value)=>{
        this.props.onReceiveStaff(value);
    }
  render() {
    let list = this.props.listStaff.map((value) => {
      // var stsring = "Trương Thanh Lâm";
      // console.log(stsring.toUpperCase().indexOf(name.toUpperCase()));
      if(this.props.filterName==null || this.props.filterName=="")
      {
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
      }else
      {
        if(value.name.toUpperCase().indexOf(this.props.filterName.toUpperCase())>=0)
        {
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
        }
      }
   
    });
    return <div className="row m-2">{list}</div>;
  }
}

export default StaffList;
