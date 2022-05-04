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
        <Navbar className="navbar-dark bg-primary mb-4" light expand="md">
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
                  alt="Quan Ly Nhan Su"
                />
              </NavbarBrand>
            </div>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="text-left m-2">
                  <NavLink className="nav-link text-light" to="/">
                    <span className="fa-solid fa-users-rays"></span> Nhân Viên
                  </NavLink>
                </NavItem>
                <NavItem className="text-left m-2">
                  <NavLink className="nav-link text-light" to="/department"> 
                    <span className="fa-solid fa-address-card"></span> Phòng Ban
                  </NavLink>
                </NavItem>
                <NavItem className="text-left m-2">
                  <NavLink className="nav-link text-light" to="/salary">
                    <span className="fa-solid fa-money-check-dollar"></span> Bảng Lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
