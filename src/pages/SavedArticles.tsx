import React, {useEffect, useState} from "react";

interface SavedArticle {
    id: number;
    title: string
}

const SavedArticles = () => {
    const [savedArticles, setSavedArticles] = useState<SavedArticle[]>([]);

    useEffect(() => {
        fetch("http://localhost:3005/articles/saved", {
            mode: "no-cors",
        }).then(r => r.json())
            .then(r => setSavedArticles(r))
    }, []);

    return (
        <div style={{
            margin: "30px"
        }}>
            {savedArticles.map(d =>
                <ul style={{
                    listStyle:'none',
                    padding: '0.5vh'
                }}>
                <li>{d.title}<span onClick={() => {
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
                    padding: "40px",
                }}>X</span></li>
                </ul>)}
        </div>
    )}

export default SavedArticles;