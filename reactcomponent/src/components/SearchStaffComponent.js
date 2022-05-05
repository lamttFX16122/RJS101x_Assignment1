import React, { Component } from "react";

class SearchStaff extends Component {
  onHandleSearch = (e) => {
    this.props.onReceiveStaffName(e.target.value);
  };
  render() {
    return (
      <React.Fragment>
        {/* <div className="form-group"> */}
          <label className="mr-1">Filter</label>
              <input
                type="text"
                //  className="form-control"
                onChange={this.onHandleSearch}
                name="txtName"
                placeholder="Tên nhân viên"
              />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default SearchStaff;
