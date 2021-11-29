import React from "react";
import {Link} from "react-router-dom";

class My404Component extends React.Component{
    render() {
        return(
            <>
                <h2 className="sectionTitle mb22"> Page Not Found</h2>
                <br/>
               <Link to="/">Back to Home</Link>
            </>
        );
    }
}

export default My404Component;