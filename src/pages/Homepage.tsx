// @ts-ignore
import React, {useEffect, useState} from "react";
import {
    CardContainer,
    CardTitle,
} from "../components/Card";
import ArticleModal from "../components/ArticleModal";

interface ArticleSummary {
    id: number;
    url: string;
    title: string;
    category: string | null;
}

const Homepage = () => {
    const [search, setSearch] = useState<string>('')
    const [refreshDisable, setRefreshDisable] = useState<boolean>()
    const [cards, setCards] = useState<ArticleSummary[]>([])
    const [articleIdToShow, setArticleIdToShow] = useState<number | null>()

    console.log(articleIdToShow)
    useEffect(() => {
        fetch("http://localhost:3000/articles/", {
            mode: "no-cors",
        }).then(r => r.json())
            .then(r => setCards(r))
    }, []);
    return <div>
        {/*ask about key*/}
        <ArticleModal key={articleIdToShow} visible={!!articleIdToShow} onClose={() => setArticleIdToShow(null)} articleIdToShow={articleIdToShow} />
        <div>
            <button onClick={() => {
                setRefreshDisable(true)
                fetch("http://localhost:3000/articles/", {
                    mode: "no-cors",
                }).then(r => r.json())
                    .then(r => {
                        setCards(r)
                    })
                setRefreshDisable(false)
            }} disabled={refreshDisable}>
                REFRESH
            </button>
            <input type="text" value={search} onChange={(e) => {
                setSearch(e.target.value)
            }}/>
        </div>
        {cards.filter(r => r.title.toLowerCase().includes(search.toLowerCase()) || r.category?.includes(search)).map(r =>
            (<CardContainer onClick={() => {
                setArticleIdToShow(r.id)
            }}>
                <CardTitle>
                    <h3>{r.title}</h3>
                </CardTitle>
                {r.category && <div style={{
                    display: "inline-block",
                    background: "gray",
                    color: "white",
                    padding: "8px",
                    borderRadius: "8px"
                }}>{r.category}</div>}
            </CardContainer>))}
    </div>
};

export default Homepage;