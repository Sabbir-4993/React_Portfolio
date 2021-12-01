import React from "react";
import About_info from "../Component/Home/About_info";
import Career_Objective from "../Component/Home/Career_Objective";
import Service_List from "../Component/Home/Service_List";
// import Testimonial from "../Component/Home/Testimonial";
import Experience from "../Component/Home/Experience";
import Clients from "../Component/Home/Clients";
import Price_Table from "../Component/Home/Price_Table";
import Hobby_Language from "../Component/Home/Hobby_Language";

class Home extends React.Component{
    render() {
        return(
          <>
              <section className="comonSection aboutSection">
                  <div className="container-fluid">
                      {/*About Info*/}
                      <About_info />

                      {/*Short Bio*/}
                      <Career_Objective />

                      {/*Service List*/}
                      <Service_List />

                      {/*Testimonial*/}
                      {/*<Testimonial />*/}

                      {/*Service Price Table*/}
                      <Price_Table />


                      {/*Hobby & Language*/}
                      <Hobby_Language />

                      {/*Client*/}
                      <Clients />

                      {/*Experience*/}
                      <Experience />
                  </div>
              </section>
          </>
        );
    }
}

export default Home;