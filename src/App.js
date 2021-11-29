import * as React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';


import Preloader from "./Component/Preloader";
import ProfileSidebar from "./Component/ProfileSidebar";
import Header from "./Component/Header";
// import Sidebar from "./Component/Sidebar";
import Home from "./Pages/Home";
import My404Component from "./Component/My404Component";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import BackToTop from "./Component/BackToTop";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Preloader />
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <ProfileSidebar />
                    <div className="col-lg-8 contentColumn">
                        <Header />
                        {/*<Sidebar />*/}
                        <div className="bodyContent">
                            <div className="pageCointainer">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/resume" element={<Resume />} />
                                    <Route path="/portfolio" element={<Portfolio />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path='*' element={<My404Component />} />
                                </Routes>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop />

        </BrowserRouter>

    </div>
  );
}

export default App;
