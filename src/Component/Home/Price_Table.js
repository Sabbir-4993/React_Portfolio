import React from "react";

class Price_Table extends React.Component{
    render() {
        return(
            <>
                <div className="row mt60">
                    <div className="col-lg-12">
                        <h2 className="sectionTitle">Fair Price</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricingTable text-center">
                            <i className="icon icon-Car"></i>
                            <h5>Starter Package</h5>
                            <p>
                                Suitable for small business or Organizations.
                            </p>
                            <h2>$27.00</h2>
                            <h6>per project</h6>
                            <a href="contact.html" className="btt_link"><i
                                className="icon icon-OpenedLock"></i><span>Let's Start</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricingTable text-center">
                            <i className="icon icon-Truck"></i>
                            <h5>Business Package</h5>
                            <p>
                                Suitable for medium business or Organizations.
                            </p>
                            <h2>$47.00</h2>
                            <h6>per project</h6>
                            <a href="contact.html" className="btt_link"><i
                                className="icon icon-OpenedLock"></i><span>Let's Start</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricingTable text-center">
                            <i className="icon icon-BigTruck"></i>
                            <h5>Pro Package</h5>
                            <p>
                                Suitable for any business or Organizations.
                            </p>
                            <h2>$97.00</h2>
                            <h6>per project</h6>
                            <a href="contact.html" className="btt_link"><i
                                className="icon icon-OpenedLock"></i><span>Let's Start</span></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Price_Table;