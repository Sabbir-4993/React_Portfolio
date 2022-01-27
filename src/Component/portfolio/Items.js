import React from "react";
import {ExternalLink} from "react-external-link";


const Items = ({items}) => {
    return (
        <>
            <div className="row" id="Grid">
                {
                    items.map((elem) => {
                        const {name, image, website, title, tools} = elem;
                        return(
                            <>
                                <div className="col-lg-6 folio_effect">
                                    <div className="folio_item">
                                        <ExternalLink href={website} target="_blank" className="folio_item_thumbs">
                                            <div className="folio_stack">
                                                <div className="folio_img_holder">
                                                    <img className="folio_img" src={image} alt="Project_Image"/>
                                                </div>
                                            </div>
                                        </ExternalLink>
                                        <div className="folio_content">
                                            <h3 className="folio_title"><ExternalLink href={website}>{name}</ExternalLink></h3>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p className="folio_cat">{title}</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <strong className="folio_cat">{tools}</strong>
                                                </div>
                                            </div>
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
