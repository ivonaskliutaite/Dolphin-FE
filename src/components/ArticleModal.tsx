import React, {useEffect, useState} from "react";
import Modal from 'react-modal';

interface ArticleModalProps {
    visible: boolean;
    onClose: () => void;
    articleIdToShow?: number | null;
}

interface Article {
    id: number;
    title: string;
    summary: string;
    content: string[];
    category: string | null;
}

const ArticleModal = (props:ArticleModalProps) => {
    const [article, setArticle] = useState<Article>()
    useEffect(() => {
        if (props.articleIdToShow){
            fetch(`http://localhost:3000/articles/${props.articleIdToShow}`, {
                mode: "no-cors",
            }).then(r => r.json())
                .then(r => setArticle(r))
        }
    }, []);
    return (
        <div>
            <Modal
                isOpen={props.visible}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                style={{  content: {
                        width: '80%'
                    },}}
                contentLabel="Example Modal"
            >
                <button onClick={ () => {
                    props.onClose()
                } }>close</button>
                <div>
                    <h1>{article?.title}</h1>
                    <h3>{article?.category}</h3>
                    {
                        article?.content.map(r => <p>{r}</p>)
                    }
                </div>
            </Modal>
        </div>
    )
}

export default ArticleModal