import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

function Company (){

    const [jobs, setJobs] = useState([]);
    const jobsCollectionRef = collection(db, "jobs");

    useEffect(() => {
        const getJobs = async () => {
            const data = await getDocs(jobsCollectionRef);

            setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
        getJobs();
    }, []);

    return(
        <>
            <div className="col-lg-6">
                <h2 className="sectionTitle">Experience</h2>
                <div className="kr-accordion" id="exps_accordion">

                    {jobs.map((job) => {
                        return (
                            <>
                                <div className="card">
                                    <div className="card-header" id="ex_01">
                                        <h2 className="mb-0">
                                            <a className="" href="#" data-toggle="collapse" data-target="#ex_col_01"
                                               aria-expanded="true" aria-controls="ex_col_01">
                                                <i className="icon icon-Cup"></i>
                                                <span>{job.company_name}</span>
                                            </a>
                                        </h2>
                                    </div>
                                    <div id="ex_col_01" className="collapse show" aria-labelledby="ex_01"
                                         data-parent="#exps_accordion">
                                        <div className="card-body">
                                            <div className="ac_meta"><span>{job.start} - {job.end}</span><span>{job.designation}</span>
                                            </div>
                                            {job.description}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Company;