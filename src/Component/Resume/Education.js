import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import {ExternalLink} from "react-external-link";

function Education (){

    const [education, setEducation] = useState([]);
    const educationCollectionRef = collection(db, "educations");

    useEffect(() => {
        const getEducation = async () => {
            const data = await getDocs(educationCollectionRef);
            // console.log(data);
            setEducation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
        getEducation();
    }, []);


    return(
        <>
            <div className="col-lg-6">
                <h2 className="sectionTitle">Education</h2>
                <div className="kr-accordion" id="edication_accordion">

                    {education.map((edu) => {
                        return(
                            <>
                                <div className="card">
                                    <div className="card-header" id="ea_01">
                                        <h2 className="mb-0">
                                            <ExternalLink className="" href="#" data-toggle="collapse" data-target="#ea_col_01" aria-expanded="true" aria-controls="ea_col_01">
                                                <i className="icon icon-Medal"></i>
                                                <span>{edu.name}</span>
                                            </ExternalLink>
                                        </h2>
                                    </div>
                                    <div id="ea_col_01" className="collapse show" aria-labelledby="ea_01"
                                         data-parent="#edication_accordion">
                                        <div className="card-body">
                                            <div className="ac_meta"><span>{edu.field}</span><span>Passing Year: {edu.end}</span><span>{edu.cgpa}</span>
                                            </div>
                                            {edu.description}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}




                    {/*<div className="card">*/}
                    {/*    <div className="card-header" id="ea_02">*/}
                    {/*        <h2 className="mb-0">*/}
                    {/*            <a className="collapsed" href="#" data-toggle="collapse"*/}
                    {/*               data-target="#ea_col_02" aria-expanded="false"*/}
                    {/*               aria-controls="ea_col_02">*/}
                    {/*                <i className="icon icon-Medal"></i>*/}
                    {/*                <span>Higher Secondary School Certificate</span>*/}
                    {/*            </a>*/}
                    {/*        </h2>*/}
                    {/*    </div>*/}
                    {/*    <div id="ea_col_02" className="collapse" aria-labelledby="ea_02"*/}
                    {/*         data-parent="#edication_accordion">*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div className="ac_meta"><span>Passing Year: 2010</span><span>Grade: 3.85</span>*/}
                    {/*            </div>*/}
                    {/*            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus*/}
                    {/*            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat*/}
                    {/*            skateboard dolor brunch.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <div className="card-header" id="ea_03">*/}
                    {/*        <h2 className="mb-0">*/}
                    {/*            <a className="collapsed" href="#" data-toggle="collapse"*/}
                    {/*               data-target="#ea_col_03" aria-expanded="false"*/}
                    {/*               aria-controls="ea_col_03">*/}
                    {/*                <i className="icon icon-Medal"></i>*/}
                    {/*                <span>Computer Science &amp; Engeneering</span>*/}
                    {/*            </a>*/}
                    {/*        </h2>*/}
                    {/*    </div>*/}
                    {/*    <div id="ea_col_03" className="collapse" aria-labelledby="ea_01"*/}
                    {/*         data-parent="#edication_accordion">*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div className="ac_meta"><span>Passing Year: 2014</span><span>Grade: 3.79</span>*/}
                    {/*            </div>*/}
                    {/*            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus*/}
                    {/*            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat*/}
                    {/*            skateboard dolor brunch.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <div className="card-header" id="ea_04">*/}
                    {/*        <h2 className="mb-0">*/}
                    {/*            <a className="collapsed" href="#" data-toggle="collapse"*/}
                    {/*               data-target="#ea_col_04" aria-expanded="false"*/}
                    {/*               aria-controls="ea_col_04">*/}
                    {/*                <i className="icon icon-Medal"></i>*/}
                    {/*                <span>Programming Course </span>*/}
                    {/*            </a>*/}
                    {/*        </h2>*/}
                    {/*    </div>*/}
                    {/*    <div id="ea_col_04" className="collapse" aria-labelledby="ea_01"*/}
                    {/*         data-parent="#edication_accordion">*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div className="ac_meta"><span>Passing Year: 2015</span><span>Grade: 3.79</span>*/}
                    {/*            </div>*/}
                    {/*            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus*/}
                    {/*            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat*/}
                    {/*            skateboard dolor brunch.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
}

export default Education;