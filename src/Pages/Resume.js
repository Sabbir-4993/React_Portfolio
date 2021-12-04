import React from "react";
import Education from "../Component/Resume/Education";
import Company from "../Component/Resume/Company";

class Resume extends React.Component{
    render() {
        return(
            <>
                <section className="comonSection resumeSection">
                    <div className="container-fluid">
                        <div className="row">
                           <Education />
                            <Company />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Resume;