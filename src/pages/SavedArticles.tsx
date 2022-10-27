import React, {useEffect, useState} from "react";
import ArticleModal from "../components/ArticleModal";

interface SavedArticle {
    id: number;
    title: string
}

const SavedArticles = () => {
    const [savedArticles, setSavedArticles] = useState<SavedArticle[]>([]);
    const [articleIdToShow, setArticleIdToShow] = useState<number | null>(null);

    useEffect(() => {
        fetch("http://localhost:3005/articles/saved", {
            mode: "no-cors",
        }).then(r => r.json())
            .then(r => setSavedArticles(r))
    }, []);

    console.log('article id', articleIdToShow);

    return (
        <div style={{
            margin: "30px"
        }}>
            <ArticleModal key={articleIdToShow} articleIdToShow={articleIdToShow} visible={!!articleIdToShow} onClose={() => setArticleIdToShow(null)} />
            {savedArticles.map(d =>
                <ul style={{
                    listStyle:'none',
                    padding: '0.5vh'
                }}>
                    <li>{d.title}<button style={{
                        cursor: "pointer",
                        margin: '0.5vh'
                    }} onClick={() => {
                        setArticleIdToShow(d.id);
                    }}>Skaityti</button><span onClick={() => {
                    const requestOptions = {
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'},
                    };
                        fetch(`http://localhost:3005/articles/saved/${d.id}`, requestOptions)
                            .then((r) => {
                                fetch("http://localhost:3005/articles/saved", {
                                    mode: "no-cors",
                                }).then(r => r.json())
                                    .then(r => setSavedArticles(r))
                            })
                }} style={{
                    cursor: "pointer",
                    color: "red",
                    padding: "20px",
                }}>X</span></li>
                </ul>)}
        </div>
    )}

export default SavedArticles;