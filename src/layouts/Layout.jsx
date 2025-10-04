import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import {cardArray} from "../constants";

const Layout = () => {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    const handleSearchArray = () => {
        setProducts(cardArray.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase())))
    }
    return (
        <>
        <Header/>
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <button
                                className="btn btn-primary search-btn"
                                onClick={handleSearchArray}
                            >
                                <img className="search-btn__icon" src="/image/search.svg" alt="search"/>
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <Outlet context={{products}}/>
            </main>
    </>
    );
};

export default Layout;