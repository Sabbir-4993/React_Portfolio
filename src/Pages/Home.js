import React from "react";
import AboutInfo from "../Component/Home/AboutInfo";
import CareerObjective from "../Component/Home/CareerObjective";
import ServiceList from "../Component/Home/ServiceList";
// import Testimonial from "../Component/Home/Testimonial";
import Experience from "../Component/Home/Experience";
import Clients from "../Component/Home/Clients";
import PriceTable from "../Component/Home/PriceTable";
import HobbyLanguage from "../Component/Home/HobbyLanguage";
import Testimonial from "../Component/Home/Testimonial";

class Home extends React.Component{
    render() {
        return(
          <>
              <section className="comonSection aboutSection">
                  <div className="container-fluid">

                      <AboutInfo />

                      <CareerObjective />

                      <ServiceList />

                      {/*<Testimonial />*/}

                      {/*<PriceTable />*/}

                       <HobbyLanguage />

                      <Clients />

                      <Experience />
                  </div>
              </section>
          </>
        );
    }
}

export default Home;