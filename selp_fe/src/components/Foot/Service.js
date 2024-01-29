import React from "react";
import { Link } from "react-router-dom";
import "styles/App.css";

const Service = () => {
    return (
        <service>
            <div className="service_title">고객센터 
                <Link to="tell:1588-7813" className="service_tel"> 1588-7813
                </Link>
            </div>
            <div className="service_time">운영시간 평일 10:00 - 18:00 (토/일, 공휴일 휴무)<br/>점심시간 평일 13:00 - 14:00
            </div>
            <Link to="/">
                <button className="service_btn">
                자주 묻는 질문
                </button>
            </Link>
        </service>
    );
};

export default Service;