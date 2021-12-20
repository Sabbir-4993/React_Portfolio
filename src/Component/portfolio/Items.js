import React from "react";
import {Link} from "react-router-dom";
import {ExternalLink} from "react-external-link";


const Items = ({items}) => {
    return (
        <>
            <div className="row" id="Grid">
                {
                    items.map((elem) => {
                        const {name, image, category, website} = elem;
                        return(
                            <>
                                <div className="col-lg-6 folio_effect">
                                    <div className="folio_item">
                                        <ExternalLink href={website} target="_blank" className="folio_item_thumbs">
                                            <div className="folio_stack">
                                                <div className="folio_img_holder">
                                                    <img className="folio_img" src={image} alt="Image"/>
                                                </div>
                                            </div>
                                        </ExternalLink>
                                        <div className="folio_content">
                                            <h3 className="folio_title"><ExternalLink href={website}>{name}</ExternalLink></h3>
                                            <p className="folio_cat">{category}</p>
                                        </div> <br/>
                                        <div className="fmfooter">
                                            <ExternalLink href={website} className="btt_link">
                                                <i className="icon icon-WorldWide"></i>
                                                <span>View Project</span>
                                            </ExternalLink>
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
