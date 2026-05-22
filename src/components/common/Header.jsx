"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import logo from "../../assets/common/dhan-xpress-logo.png";

import SearchModal from "./SearchModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <header className="main-header">
        <div className="topbar">
          <div className="container">
            <div className="topbar__left">
              <div className="topbar__social">
                <Link href="#" className="fab fa-facebook-square"></Link>

                <Link href="#" className="fab fa-twitter"></Link>

                <Link href="#" className="fab fa-pinterest-p"></Link>

                <Link href="#" className="fab fa-instagram"></Link>
              </div>

              <Link href="/blogs">Company Blogs</Link>

              {/* <Link href="/FAQs">FAQs</Link> */}
            </div>

            <div className="topbar__right">
              <Link href="#">
                <i className="pylon-icon-email1"></i>
                needhelp@company.com
              </Link>

              <Link href="#">
                <i className="pylon-icon-clock2"></i>
                Mon - Sat 8:00 AM - 6:00 PM
              </Link>
            </div>
          </div>
        </div>
        <nav className="main-menu stricked-menu">
          <div className="container">
            <div className="logo-box">
              <Link href="/" aria-label="dhanXpress-logo">
                <Image
                  src={logo}
                  alt="Dhan Xpress"
                  width={200}
                  height={200}
                  loading="eager"
                />
              </Link>

              <span className="fa fa-bars mobile-nav__toggler"></span>
            </div>

            <ul className="main-menu__list">
              <li className={pathname === "/" ? "current" : ""}>
                <Link href="/">Home</Link>
              </li>

              <li className={pathname === "/aboutus" ? "current" : ""}>
                <Link href="/aboutus">About Us</Link>
              </li>

              <li
                className={
                  pathname === "/personal-loan-calculator" ? "current" : ""
                }
              >
                <Link href="/personal-loan-calculator">Calculator</Link>
              </li>

              <li
                className={
                  pathname === "/personal-loan-eligibility" ? "current" : ""
                }
              >
                <Link href="/personal-loan-eligibility">Eligibility</Link>
              </li>

              <li className={pathname === "/contactus" ? "current" : ""}>
                <Link href="/contactus">Contact</Link>
              </li>

              <li
                className="search-btn search-toggler"
                onClick={() => setOpenModal(true)}
              >
                <i className="pylon-icon-magnifying-glass"></i>
              </li>
            </ul>

            <div className="main-header__info">
              <div className="main-header__info-phone">
                <i className="pylon-icon-tech-support"></i>

                <div className="main-header__info-phone-content">
                  <span>Call Anytime</span>

                  <h3>
                    <Link href="tel:+19812310000">+1 9812310000</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {openModal && <SearchModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Header;
