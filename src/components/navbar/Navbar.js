import React from "react";
import { Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const Navbar = () => (
  <div className="container-fluid">
    <nav
      className="layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      style={{ flexWrap: "nowrap" }}
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item lh-1 me-3">
            <a
              className="github-button"
              href="https://github.com/themeselection/sneat-html-admin-template-free"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
            >
              Star
            </a>
          </li>

          <Dropdown className="nav-item navbar-dropdown dropdown-user">
            <DropdownToggle className="hide-arrow" as={Nav.Link}>
              <div className="avatar avatar-online">
                <img src="/assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
              </div>
            </DropdownToggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <a className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img src="/assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">John Doe</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </Dropdown.Item>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <Dropdown.Item>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-cog me-2"></i>
                  <span className="align-middle">Settings</span>
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a className="dropdown-item" href="#">
                  <span className="d-flex align-items-center align-middle">
                    <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span className="flex-grow-1 align-middle">Billing</span>
                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                  </span>
                </a>
              </Dropdown.Item>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <Dropdown.Item>
                <a className="dropdown-item" href="auth-login-basic.html">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log Out</span>
                </a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
