import React from "react";
import Modal from "react-modal";
import { useState } from "react";

const MenuModal = ({ text, content }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(34, 34, 34, .5)",
            bottom: "0",
            left: "0",
            position: "fixed",
            right: "0",
            top: "0",
            zIndex: "1010",
        },
        content: {
            backgroundColor: "#fff",
            left: "50%",
            overflow: "hidden",
            position: "absolute",
            top: "50%",
            transform: "translate(-50%,-50%",
            width: "580px",
            height: "400px",
            margin: "auto",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, .1)",
            padding: "20px",
        },
    };

    return (
        <div>
            <div className="menu_item" onClick={openModal}>{text}</div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
                {content}
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
};

export default MenuModal;