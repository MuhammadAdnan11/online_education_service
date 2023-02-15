import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid mobile-toggler d-none d-xl-block ">
        <div className="row p-3 ">
          <div className="col d-flex flex-row gap-3 align-self-center justify-content-center ">
            <h6>WELCOME </h6>
            <h6>
              {" "}
              CALL <span className="iconcolor1">+44 300 303 0266</span>
            </h6>
            <h6>FOLLOW US</h6>
            <AiOutlineTwitter className="iconcolor1" />
            <FaInstagramSquare className="iconcolor1" />
            <FaFacebookF className="iconcolor1" />
          </div>
          <div className="col d-flex namargin flex-row justify-content-end ">
            <button
              type="button"
              className="btn btn-col btn-sm text-white rounded-pill"
            >
              <RiAdminLine className="iconcolor" /> Login
            </button>
            <button
              type="button"
              className="btn btn-col btn-sm text-white rounded-pill"
            >
              <BsPencil className="iconcolor" /> Register
            </button>
          </div>
        </div>
      </div>

      <header>
        <div className="container-fluid">
          <div className="navb-logo ">
            <img src="./Images/Oes Logo/logo7.jpeg" alt="Logo" />
          </div>

          <div className="navb-items d-none d-xl-flex">
            <div className="item">
              <a href="/">HOME</a>
            </div>

            <div className="item">
              <a href="/services">COURSES</a>
            </div>

            <div className="item">
              <a href="/cases">INSTRUCTORS</a>
            </div>

            <div className="item">
              <a href="/about">EVENTS</a>
            </div>

            <div className="item">
              <a href="/about">PAGES</a>
            </div>

            <div className="item">
              <a href="/about">ELEMENTS</a>
            </div>

            <div className="item">
              <a href="/about">
                <VscSearch />
              </a>
            </div>

            <div className="item">
              <a href="/about">
                <AiOutlineShoppingCart />
              </a>
            </div>

            <button
              className="btn item"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <GoThreeBars />
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Online Education Service</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                Lorem ipsum dolor sit amet, conse ctetur adip elit, pellentesque
                turpis.
                <br />
                <br />
                <br />
                <br />
                <AiOutlineTwitter className="iconcolor2" />
                <FaInstagramSquare className="iconcolor2" />
                <FaFacebookF className="iconcolor2" />
              </div>
            </div>
          </div>

          {/* Button trigger modal  */}
          <div className="mobile-toggler d-lg-none">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              <GoThreeBars />
            </a>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="navbModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <img src="./Images/Oes Logo/logo7.jpeg" alt="logo" />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="modal-line">
                    <AiOutlineHome classNameName="fs-1 colo " />
                    <a href="/">Home</a>
                  </div>

                  <div className="modal-line">
                    <MdOutlineMedicalServices classNameName="fs-1 colo " />
                    <a href="/services">Services</a>
                  </div>

                  <div className="modal-line">
                    <BiBookReader classNameName="fs-1 colo  " />
                    <a href="/cases">Courses</a>
                  </div>

                  <div className="modal-line">
                    <AiOutlineInsertRowAbove classNameName="fs-1 colo " />
                    <a href="/about">About</a>
                  </div>

                  <a href="/contact" className="navb-button" type="button">
                    Let's talk
                  </a>
                </div>

                <div className="mobile-modal-footer">
                  <a target="_blank" href="#">
                    <AiOutlineTwitter className="iconcolor1" />
                  </a>
                  <a target="_blank" href="#">
                    <FaInstagramSquare className="iconcolor1" />
                  </a>
                  <a target="_blank" href="#">
                    <FaFacebookF className="iconcolor1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
