import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "styles/Modal.css";

function MenuItems() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
            width: "300px",
            height: "400px",
            margin: "auto",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            padding: "20px",
        },
    };

    return (
        <div>
            <MenuLink onClick={openModal} text="검수기준" />
            <MenuLink onClick={openModal} text="이용정책" />
            <MenuLink onClick={openModal} text="패널티 정책" />
            <MenuLink onClick={openModal} text="커뮤니티 가이드라인" />

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <h1>Modal</h1>
                <p>Modal content</p>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
};

const MenuLink = ({ onClick, text }) => {
    return (
        <div className="menu_item">
            <span className="menu_link" onClick={onClick}>
                {text}
            </span>
        </div>
    );
};

export default MenuItems;
