import React, {useEffect, useState} from "react";
import Modal from 'react-modal'

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

const ArticleModal = (props: ArticleModalProps) => {
    const [article, setArticle] = useState<Article>()
    useEffect(() => {
        if (props.articleIdToShow) {
            fetch(`http://localhost:3005/articles/${props.articleIdToShow}`, {
                mode: "no-cors",
            }).then(r => r.json())
                .then(r => setArticle(r))
        }
    }, []);
    return (
        <div>
            <Modal
                isOpen={props.visible}
                contentLabel="Example Modal"
            >
                <button style={{
                    cursor: "pointer",
                    borderRadius: "5px"
                }} onClick={() => {
                    props.onClose()
                }}>Close
                </button>
                <button style={{
                    cursor: "pointer",
                    borderRadius: "5px"
                }}
                    onClick={() => {
                    const requestOptions = {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(article)
                    };
                    if (article?.id) {
                        fetch(`http://localhost:3005/articles/${article.id}`, requestOptions)
                            .then(response => response.json())
                    }
                }}>Save
                </button>
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