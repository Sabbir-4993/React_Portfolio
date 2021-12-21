import React, {useState} from "react";
// import {Link} from "react-router-dom";
import List from "../Component/portfolio/PortfolioList";
import Items from "../Component/portfolio/Items";
import Filter from "../Component/portfolio/Filter";

const allCatValues = [ ...new Set(List.map((curElem) =>  curElem.category)), "all"];

// console.log(allCatValues);

const Portfolio = () => {
    const [items, setItems] = useState(List);
    const [catItems, setCatItems] = useState(allCatValues);

    const filterMenu = (category) =>{

        if (category === "all"){
            setItems(List);
            return;
        }

        const updateItems = List.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updateItems);
    }

    return (
        <>
            <section className="comonSection portfolioSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sectionTitle">Latest Projects</h2>
                        </div>
                    </div>

                    {/*My Filter is here*/}
                    <Filter filterMenu={filterMenu} catItems={catItems} />

                    {/*List of Portfolio show here*/}
                    <Items items={items} />
                </div>
            </section>
        </>
    );
}

export default Portfolio;