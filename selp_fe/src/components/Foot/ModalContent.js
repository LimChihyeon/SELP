import React from 'react';

const ModalContent = ({ content }) => {
    return (
        <div className="modal_content">
            <div className="modal_header">
                <div className="modal_title">
                    {content.title}
                </div>
            </div>
            <div className="modal_content">
                <div className="categoty_list">
                    
                </div>
                {content.description}
            </div>
        </div>
        
    );
};

export default ModalContent;