import React from "react";
import Modal from 'react-modal';

interface ArticleModalProps {
    visible: boolean;
    onClose: () => void;
}

const ArticleModal = (props:ArticleModalProps) => {
    return (
        <div>
            <Modal
                isOpen={props.visible}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                style={{  content: {
                        width: '300px'
                    },}}
                contentLabel="Example Modal"
            >
                <button onClick={ () => {
                    props.onClose()
                } }>close</button>
            </Modal>
        </div>
    )
}

export default ArticleModal