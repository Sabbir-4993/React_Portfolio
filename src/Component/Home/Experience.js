import React from "react";

class Experience extends React.Component{
    render() {
        return(
            <>
                <div className="row mt60">
                    <div className="col-lg-12">
                        <h2 className="sectionTitle">Interesting Facts</h2>
                    </div>
                </div>
                <div className="row mb30">
                    <div className="col-lg-4">
                        <div className="icon_box_03 text-center hasCounter" data-count="10">
                            <div className="icon_div">
                                <i><span className="counter">10</span>+</i>
                            </div>
                            <h5>Years Experience</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_03 text-center hasCounter" data-count="198">
                            <div className="icon_div">
                                <i><span className="counter">198</span>+</i>
                            </div>
                            <h5>Projects Done</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_03 text-center hasCounter" data-count="2">
                            <div className="icon_div">
                                <i><span className="counter">2</span>K+</i>
                            </div>
                            <h5>Happy Customers</h5>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Experience;