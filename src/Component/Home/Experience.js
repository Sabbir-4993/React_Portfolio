import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

function Experience () {
    const [experience, setExperience] = useState([]);
    const experienceCollectionRef = collection(db, "experience");

    useEffect(() => {
        const getExperience = async () => {
            const data = await getDocs(experienceCollectionRef);
            setExperience(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }

        getExperience();
    }, []);

    return(
        <>
            <div className="row mt60">
                <div className="col-lg-12">
                    <h2 className="sectionTitle">Experience</h2>
                </div>
            </div>
            <div className="row mb30">
                {experience.map((exp) => {
                    return(
                        <>
                            <div className="col-lg-3">
                                <div className="icon_box_03 text-center hasCounter" data-count="{exp.years_experience}">
                                    <div className="icon_div">
                                        <i><span className="counter">{exp.years_experience}</span>+</i>
                                    </div>
                                    <h5>Years Experience</h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="icon_box_03 text-center hasCounter" data-count="{exp.company}">
                                    <div className="icon_div">
                                        <i><span className="counter">{exp.company}</span>+</i>
                                    </div>
                                    <h5>Work with Company</h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="icon_box_03 text-center hasCounter" data-count="{exp.customer}">
                                    <div className="icon_div">
                                        <i><span className="counter">{exp.customer}</span>+</i>
                                    </div>
                                    <h5>Happy Customers</h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="icon_box_03 text-center hasCounter" data-count="{exp.successful_project}">
                                    <div className="icon_div">
                                        <i><span className="counter">{exp.successful_project}</span>+</i>
                                    </div>
                                    <h5>Projects Done</h5>
                                </div>
                            </div>
                        </>
                    );
                })}

            </div>
        </>
    );
}

export default Experience;