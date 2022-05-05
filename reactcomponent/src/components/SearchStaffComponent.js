import React, { Component } from "react";

class SearchStaff extends Component {
  onHandleSearch = (e) => {
    this.props.onReceiveStaffName(e.target.value);
  };
  render() {
    return (
      <React.Fragment>
          <label className="mr-1 ml-3">Filter</label>
              <input
                type="text"
                onChange={this.onHandleSearch}
                name="txtName"
                placeholder="Tên nhân viên"
              />
      </React.Fragment>
    );
  }
}

export default SearchStaff;
