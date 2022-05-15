import React, { Component } from "react";

class SearchStaff extends Component {
  constructor(props) {
    super(props);
    this.txt_Search = React.createRef();
  }
  onClickSearch = () => {
    this.props.onReceiveStaffName(this.txt_Search.current.value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="input-group">
          <input
            id="search-input"
            type="search"
            ref={this.txt_Search}
            name="txt_Search"
            className="form-control"
          />
          <button
            onClick={this.onClickSearch}
            id="search-button"
            type="button"
            className="btn btn-primary input-group-text"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchStaff;
