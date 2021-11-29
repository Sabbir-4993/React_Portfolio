import React from "react";

const Filter = ({filterMenu, catItems}) => {
    return(
        <>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="filterUL">
                        {
                            catItems.map((curClem, index) => {
                                return <li className="filter" key={index} onClick={() => filterMenu(curClem)}>{curClem}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Filter;