import React from 'react';
import '../styles/App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer.sm">
        <div className="inner">
          <div className="service_area">
            <div className="customer_service">
              <strong className="service_title">고객센터<a href="tel:1588-7813" className="service_tel">1588-7813</a></strong>
              <div className="service_time">
                <dl className="time_box">
                  <dt className="time_term">운영시간 평일 10:00 - 18:00 (토/일, 공휴일 휴무) 점심시간 평일 13:00 - 14:00</dt>
                </dl>
              </div>
              <p className="service_notice">1:1 문의하기는 앱에서만 가능합니다.</p>
              <div className="service_btn_box">
                <a href="#" className="btn solid small"> 자주 묻는 질문 </a>
              </div>
            </div>
            <div className="footer_menu">
              <div className="menu_box">
                <strong className="menu_title">이용안내</strong>
                <ul className="menu_list">
                  <li className="menu_item"><a href="#" className="menu_link"> 검수기준 </a></li>
                  <li className="menu_item"><a href="#" className="menu_link"> 이용정책 </a></li>
                  <li className="menu_item"><a href="#" className="menu_link"> 패널티 정책 </a></li>
                  <li className="menu_item"><a href="#" className="menu_link"> 커뮤니티 가이드라인 </a></li>
                </ul>
              </div>
              <div className="menu_box">
                <strong className="menu_title">고객지원</strong>
                <ul className="menu_list">
                  <li className="menu_item"><a href="/notice" className="menu_link">공지사항</a></li>
                  <li className="menu_item"><a href="/about" target="_blank" className="menu_link">서비스 소개</a></li>
                  <li className="menu_item"><a href="/showroom" target="_self" className="menu_link">스토어 안내</a></li>
                  <li className="menu_item"><a href="/about/seller_reception" target="_blank" className="menu_link">판매자 방문접수</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="corporation_area">
            <ul className="term_list">
              <li className="term_item"><a href="https://www.kreamcorp.com/" target="_blank" rel="noopener noreferrer" className="term_link"> 회사소개 </a></li>
              <li className="term_item"><a href="https://recruit.kreamcorp.com/" target="_blank" rel="noopener noreferrer" className="term+link"> 인재채용 </a></li>
              <li className="term_item" style={{ display: 'none' }}><a href="https://www.kreamcorp.com/view/contact.html" target="_blank" rel="noopener noreferrer" className="term_link"> 제휴제안 </a></li>
              <li className="term_item"><a href="#" className="term_link"> 이용약관 </a></li>
              <li className="term_item privacy"><a href="#" className="term_link"> 개인정보처리방침 </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;