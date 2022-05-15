import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/actionIndex";
class SearchStaff extends Component {
  constructor(props){
    super(props);
    this.state={
      txt_Search: ''
    }
  }
  onChange=(e)=>{
    const target=e.target;
    const name=target.name;
    const value=target.value;
    this.setState({
      [name]: value
    })
  }
  onClickSearch = () => {
    // console.log(this.state.txt_Search)
     this.props.onSearch(this.state.txt_Search)
  };
  render() {
    return (
      <React.Fragment>
        <div className="input-group">
          <div className="form-outline">
            <input id="search-input" type="search" name="txt_Search" className="form-control" onChange={this.onChange}/>
          </div>
          <button onClick={this.onClickSearch} id="search-button" type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // searchStaff: state.searchStaff
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
   onSearch:(txt_Search)=>{
     dispatch(actions.searchStaff(txt_Search));
   }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchStaff);
