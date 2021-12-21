import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {ExternalLink} from "react-external-link";

function AboutInfo() {
        const [users, setUsers] = useState([]);
        const usersCollectionRef = collection(db, "users");

        useEffect(() => {
            const getUsers = async () => {
                const data = await getDocs(usersCollectionRef);
                // console.log(data);
                setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            };

        getUsers();

        }, []);


        return(
            <>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="sectionTitle">About Info</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                        {users.map((user) => {
                            return(
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="icon_box_01">
                                            <i className="icon icon-User"></i>
                                            <h3>My Name</h3>
                                            <p>{user.name}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="icon_box_01">
                                            <i className="icon icon-Calculator"></i>
                                            <h3>My Age</h3>
                                            <p>{user.age} Years</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="icon_box_01">
                                            <i className="icon icon-Mail"></i>
                                            <h3>Email Address</h3>
                                            <p><ExternalLink href="mailto:{user.email}">{user.email}</ExternalLink></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="icon_box_01">
                                            <i className="icon icon-Phone"></i>
                                            <h3>Phone Number</h3>
                                            <p>{user.phone}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="icon_box_01">
                                            <i className="icon icon-Pointer"></i>
                                            <h3>Address</h3>
                                            <p>
                                                <Link to="/contact">{user.address}</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </>
        );
    }

export default AboutInfo;