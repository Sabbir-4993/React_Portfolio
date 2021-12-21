import React from "react";

class HobbyLanguage extends React.Component{
    render() {
        return(
            <>
                <div className="row mt60">

                    {/*Love To*/}
                    <div className="col-lg-5">
                        <h2 className="sectionTitle">Love To</h2>
                        <div className="singleInt">
                            <i className="interest-badminton"></i>
                            <h3>Badminton</h3>
                        </div>
                        <div className="singleInt">
                            <i className="interest-knight"></i>
                            <h3>Chase</h3>
                        </div>
                        <div className="singleInt">
                            <i className="interest-basketball"></i>
                            <h3>Basket Ball</h3>
                        </div>
                    </div>
                    {/*Languages*/}

                    <div className="col-lg-7">
                        <h2 className="sectionTitle">Languages</h2>
                        <div className="languageDiv">
                            <div className="ldInner profLevel9">
                                <h5>English</h5>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <i>9/10</i>
                            </div>
                            <div className="ldInner profLevel6">
                                <h5>German</h5>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <i>6/10</i>
                            </div>
                            <div className="ldInner profLevel4">
                                <h5>Spanish</h5>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <i>4/10</i>
                            </div>
                            <div className="ldInner profLevel10">
                                <h5>Bangla</h5>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <i>10/10</i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HobbyLanguage;