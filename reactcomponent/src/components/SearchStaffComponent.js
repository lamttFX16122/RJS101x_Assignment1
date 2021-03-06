import React, { Component } from "react";

class SearchStaff extends Component {
  onHandleSearch = (e) => {
    this.props.onReceiveStaffName(e.target.value);
  };
  render() {
    return (
      <div className="row m-3">
        <div className="form-group">
          <label>Lọc theo tên nhân viên</label>
        
              <input
                type="text"
                className="form-control"
                onChange={this.onHandleSearch}
                name="txtName"
                placeholder="Tên nhân viên"
              />
    
         
        </div>
      </div>
    );
  }
}

export default SearchStaff;
