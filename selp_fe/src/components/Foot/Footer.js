import React from "react";
import "styles/App.css";
import CustomerService from "./CustomerService";
import MenuItems from "./Modal";
import Menu from "./Menu";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner">
        <div className="service_area">
          <CustomerService />
          <Menu />
        </div>
        
            <div className="menu_box">
              <strong className="menu_title">고객지원</strong>
              <ul className="menu_list">
                <li className="menu_item">
                  <a href="/notice" className="menu_link">
                    공지사항
                  </a>
                </li>
                <li className="menu_item">
                  <a href="/about" target="_blank" className="menu_link">
                    서비스 소개
                  </a>
                </li>
                <li className="menu_item">
                  <a href="/showroom" target="_self" className="menu_link">
                    스토어 안내
                  </a>
                </li>
                <li className="menu_item">
                  <a
                    href="/about/seller_reception"
                    target="_blank"
                    className="menu_link"
                  >
                    판매자 방문접수
                  </a>
                </li>
              </ul>
            </div>
          </div>
        <div className="corporation_area">
          <ul className="term_list">
            <li className="term_item">
              <a
                href="https://www.kreamcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="term_link"
              >
                {" "}
                회사소개{" "}
              </a>
            </li>
            <li className="term_item">
              <a
                href="https://recruit.kreamcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="term+link"
              >
                {" "}
                인재채용{" "}
              </a>
            </li>
            <li className="term_item" style={{ display: "none" }}>
              <a
                href="https://www.kreamcorp.com/view/contact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="term_link"
              >
                {" "}
                제휴제안{" "}
              </a>
            </li>
            <li className="term_item">
              <a href="#" className="term_link">
                {" "}
                이용약관{" "}
              </a>
            </li>
            <li className="term_item privacy">
              <a href="#" className="term_link">
                {" "}
                개인정보처리방침{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Footer;
