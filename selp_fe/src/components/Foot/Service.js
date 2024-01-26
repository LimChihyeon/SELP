import React from "react";
import { Link } from "react-router-dom";
import "styles/App.css";

const Service = () => {
    return (
        <div className="servie_area">
            <div className="service_title">고객센터 
                <Link to="tell:1588-7813" className="service_tel"> 1588-7813
                </Link>
            </div>
            <div className="service_time">운영시간 평일 10:00 - 18:00 (토/일, 공휴일 휴무)<br/>점심시간 평일 13:00 - 14:00
            </div>
            <p className="service_notice">1:1 문의하기는 앱에서만 가능합니다.</p>
            <div className="service_btn_box">
                <Link to="/" className="btn solid small">
                    자주 묻는 질문
                </Link>
            </div>
        </div>
        
    );
};

export default Service;