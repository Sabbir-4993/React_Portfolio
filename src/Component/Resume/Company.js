import React from "react";

function Company (){
    return(
        <>
            <div className="col-lg-6">
                <h2 className="sectionTitle">Experience</h2>
                <div className="kr-accordion" id="exps_accordion">
                    <div className="card">
                        <div className="card-header" id="ex_01">
                            <h2 className="mb-0">
                                <a className="" href="#" data-toggle="collapse" data-target="#ex_col_01"
                                   aria-expanded="true" aria-controls="ex_col_01">
                                    <i className="icon icon-Cup"></i>
                                    <span>ABC Software Ltd.</span>
                                </a>
                            </h2>
                        </div>
                        <div id="ex_col_01" className="collapse show" aria-labelledby="ex_01"
                             data-parent="#exps_accordion">
                            <div className="card-body">
                                <div className="ac_meta"><span>Jan 2015 - Mar 2016</span><span>Jr. Developer</span>
                                </div>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                skateboard dolor brunch.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="ex_02">
                            <h2 className="mb-0">
                                <a className="collapsed" href="#" data-toggle="collapse"
                                   data-target="#ex_col_02" aria-expanded="false"
                                   aria-controls="ex_col_02">
                                    <i className="icon icon-Cup"></i>
                                    <span>XYZ Company Ltd.</span>
                                </a>
                            </h2>
                        </div>
                        <div id="ex_col_02" className="collapse" aria-labelledby="ex_02"
                             data-parent="#exps_accordion">
                            <div className="card-body">
                                <div className="ac_meta"><span>Mar 2016 - Apr 2017</span><span>Sr. Developer</span>
                                </div>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                skateboard dolor brunch.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="ex_03">
                            <h2 className="mb-0">
                                <a className="collapsed" href="#" data-toggle="collapse"
                                   data-target="#ex_col_03" aria-expanded="false"
                                   aria-controls="ex_col_03">
                                    <i className="icon icon-Cup"></i>
                                    <span>LCC Softwar Ltd.</span>
                                </a>
                            </h2>
                        </div>
                        <div id="ex_col_03" className="collapse" aria-labelledby="ex_01"
                             data-parent="#exps_accordion">
                            <div className="card-body">
                                <div className="ac_meta"><span>Jul 2017 - Nov 2018</span><span>Lead Developer</span>
                                </div>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                skateboard dolor brunch.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="ex_04">
                            <h2 className="mb-0">
                                <a className="collapsed" href="#" data-toggle="collapse"
                                   data-target="#ex_col_04" aria-expanded="false"
                                   aria-controls="ex_col_04">
                                    <i className="icon icon-Cup"></i>
                                    <span>Envato Ltd.</span>
                                </a>
                            </h2>
                        </div>
                        <div id="ex_col_04" className="collapse" aria-labelledby="ex_04"
                             data-parent="#exps_accordion">
                            <div className="card-body">
                                <div className="ac_meta"><span>Nov 2018 - Continue</span><span>Lead Developer</span>
                                </div>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                skateboard dolor brunch.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;