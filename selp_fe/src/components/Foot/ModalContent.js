import React from 'react';

const ModalContent = ({ content }) => {
    return (
        <div>
            <div className="modal_header">
                <div className="modal_title">
                    {content.title}
                </div>
            </div>
            <div className="modal_content">
                {content.description}
            </div>
        </div>
        
    );
};

export default ModalContent;