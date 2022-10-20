import React, {useEffect, useState} from "react";

interface SavedArticle {
    id: number;
    title: string
}

const SavedArticles = () => {
    const [savedArticles, setSavedArticles] = useState<SavedArticle[]>([
        {
            id: 1,
            title: 'Naujiena nr 1'
        },
        {
            id: 2,
            title: 'Naujiena nr 2'
        },
        {
            id: 3,
            title: 'Naujiena nr 3'
        }
    ]);

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
                <li>{d.title}<span onClick={() => window.alert('clicked')} style={{
                    cursor: "pointer",
                    color: "red",
                    padding: "40px",
                }}>X</span></li>
                </ul>)}
        </div>
    )}

export default SavedArticles;