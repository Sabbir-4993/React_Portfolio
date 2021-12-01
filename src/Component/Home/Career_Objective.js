import React, {useEffect, useState} from "react";

import Signature from "../../assets/images/home_01/3.png";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

function Career_Objective() {
    const [career, setBio] = useState([]);
    const careerCollectionRef = collection(db, "career_objective");

    useEffect(() => {
        const  getCareer = async () => {
            const data = await getDocs(careerCollectionRef);
            setBio(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };

        getCareer();
    }, []);


    return(
        <>
            <div className="row mt30">
                <div className="col-lg-12">
                    <h2 className="sectionTitle mb22">Short Bio</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="abContent">
                        {career.map((bio) => {
                            return(
                                <p>
                                    {bio.details}
                                </p>
                            );
                        })}

                        <img className="signImg mt-3 float-right" src={Signature} alt="Signature" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career_Objective;