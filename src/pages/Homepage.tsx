// @ts-ignore
import React, {useEffect, useState} from "react";
import ArticleModal from "../components/ArticleModal";
import {RefreshButton} from "../components/Buttons";
import HomeCard from "../components/Card";

export interface ArticleSummary {
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

    useEffect(() => {
        fetch("http://localhost:3005/articles/", {
            mode: "no-cors",
        }).then(r => r.json())
            .then(r => setCards(r))
    }, []);
    return <div>
        <ArticleModal key={articleIdToShow} visible={!!articleIdToShow} onClose={() => setArticleIdToShow(null)} articleIdToShow={articleIdToShow} />
        <div>
            <RefreshButton onClick={() => {
                setRefreshDisable(true)
                fetch("http://localhost:3005/articles/", {
                    mode: "no-cors",
                }).then(r => r.json())
                    .then(r => {
                        setCards(r)
                    })
                setRefreshDisable(false)
            }} disabled={refreshDisable}>
                Atnaujinti <i className="fa fa-refresh" aria-hidden="true"></i>
            </RefreshButton>
            <input type="text" placeholder="Įveskite ieškomą frazę..." value={search} onChange={(e) => {
                setSearch(e.target.value)
            }}/>
        </div>
        {cards
            .filter(r => r.title.toLowerCase().includes(search.toLowerCase()) || r.category?.includes(search))
            .map(r => <HomeCard data={r} onclick={() => {
                 setArticleIdToShow(r.id)
                }}></HomeCard>
            )}
    </div>
};

export default Homepage;