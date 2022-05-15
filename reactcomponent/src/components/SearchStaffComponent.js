import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "./../actions/actionIndex";
class SearchStaff extends Component {
  constructor(props){
    super(props);
    this.txt_Search = React.createRef();
  }
  onClickSearch = () => {
      this.props.onSearch(this.txt_Search.current.value)
  };
  render() {
    return (
      <React.Fragment>
       <div className="input-group"> 
            <input id="search-input" type="search" ref={this.txt_Search}  name="txt_Search" className="form-control" onChange={this.onChange}/>
          <button onClick={this.onClickSearch} id="search-button" type="button" className="btn btn-primary input-group-text">
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
