import React, { Component } from "react";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";

class SetColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 0,
    };
  }
  // ===========================================Code For Dropdown==================================
  // handleCheck(e) {
  //   if (e.currentTarget.dataset.id == "0") {
  //     this.props.setCulumn("col-lg-4 col-md-6 col-sm-6 col-12");
  //   } else if (e.currentTarget.dataset.id == "1") {
  //     this.props.setCulumn("col-12");
  //   } else if (e.currentTarget.dataset.id == "2") {
  //     this.props.setCulumn("col-6");
  //   } else if (e.currentTarget.dataset.id == "3") {
  //     this.props.setCulumn("col-4 small");
  //   }
  // }
  HandleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      column: value,
    });
    switch (value) {
      case "1":
        this.props.setCulumn("col-12");
        break;
      case "2":
        this.props.setCulumn("col-6");
        break;
      case "3":
        this.props.setCulumn("col-4");
        break;
      default:
        this.props.setCulumn("col-lg-4 col-md-6 col-sm-6 col-12");
        break;
    }
  };
  render() {
    return (
      <div className="row slt-columnchange m-3">
        <div className="form-group">
          <label>Số cột hiển thị</label>
          <select
            className="form-control"
            name="column"
            value={this.state.column}
            onChange={this.HandleChange}
          >
            <option value={0}>Mặc định</option>
            <option value={1}>1 cột</option>
            <option value={2}>2 cột</option>
            <option value={3}>3 cột</option>
          </select>
        </div>

        {/* <DropdownButton id="dropdown-basic-button" className="drop" title="Số cột hiển thị">
          <Dropdown.Item onClick={this.handleCheck.bind(this)}  data-id="0" href="#/action-1">Mặc định</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCheck.bind(this)} data-id="1" href="#/action-2">1 cột</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCheck.bind(this)} data-id="2" href="#/action-3">2 cột</Dropdown.Item>
          <Dropdown.Item onClick={this.handleCheck.bind(this)} data-id="3" href="#/action-3">3 cột</Dropdown.Item>
        </DropdownButton> */}
      </div>
    );
  }
}
export default SetColumn;
