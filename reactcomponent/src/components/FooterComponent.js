import React, { Component } from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white bg-dark mt-5">
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-lg-8 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">FOOTER CONTENT</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis
                obcaecati. Ducimus, quas. Corrupti, pariatur eaque? Reiciendis
                assumenda iusto sapiente inventore animi?
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li><Link to="/">Nhân viên</Link></li>
                <li><Link to="/department">Phòng Ban</Link></li>
                <li><Link to="/salary">Bảng Lương</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="mb-4" />

        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free</span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button>
          </p>
        </section>

        <hr className="mb-4" />

        <section className="mb-4 text-center">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3 setColor-Footer-2">
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
export default Footer;
