import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
 import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar-dark bg-primary text-white" light expand="md">
          <div className="container d-flex flex-row flex-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap">
            <div>
              <NavbarToggler
                onClick={this.toggleNav}
                className="mr-3"
              ></NavbarToggler>
              <NavbarBrand href="/">
                <img
                  src="assets/images/logo.png"
                  height="30"
                  width="41"
                  alt="Ristorante Con Fusion"
                />
              </NavbarBrand>
            </div>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="text-left m-2">
                  <NavLink className="nav-link text-info" to="/">
                    <span className="fa-solid fa-users-rays"></span> Nhân Viên
                  </NavLink>
                </NavItem>
                <NavItem className="text-left m-2">
                  <NavLink className="nav-link text-info" to="/department"> 
                    <span className="fa-solid fa-address-card"></span> Phòng Ban
                  </NavLink>
                </NavItem>
                <NavItem className="text-left m-2">
                  {/* <NavLink className="nav-link text-info" to="/menu"> */}
                    <span className="fa-solid fa-money-check-dollar"></span> Bảng Lương
                  {/* </NavLink> */}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* <div className="jumbotron">
          <div className="container">
            <div className="row rowheader">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Header;
