import React from "react";
import {Link} from "react-router-dom";


const Items = ({items}) => {
    return (
        <>
            <div className="row" id="Grid">
                {
                    items.map((elem) => {
                        const {name, image, category} = elem;

                        return(
                            <>
                                <div className="col-lg-6 folio_effect">
                                    <div className="folio_item">
                                        <Link to="/portfolio/single" className="folio_item_thumbs">
                                            <div className="folio_stack">
                                                <div className="folio_decoration"></div>
                                                <div className="folio_decoration"></div>
                                                <div className="folio_decoration"></div>
                                                <div className="folio_decoration"></div>
                                                <div className="folio_img_holder">
                                                    <img className="folio_img" src={image} alt="Image"/>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="folio_content">
                                            <h3 className="folio_title"><Link to="/portfolio/single">{name}</Link></h3>
                                            <p className="folio_cat"><Link to="/portfolio">{category}</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Items;
