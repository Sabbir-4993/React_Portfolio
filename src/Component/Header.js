import React from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';
import {ExternalLink} from "react-external-link";



class Header extends React.Component{
    componentDidMount() {
        $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
            e.preventDefault();
            $(this).siblings('ul').slideToggle();
        });
        $('.menu_btn').on('click', function(e){
            e.preventDefault();
            $('.mainMenu').slideToggle();
            $(this).toggleClass('active');
        });
    }

    render() {
        return(
            <>
                <header className="header clearfix">
                    <ExternalLink href="#" className="menu_btn">
                        <i className="icofont-navigation-menu"></i>
                        Menu
                    </ExternalLink>

                    <nav className="mainMenu" id="navbarSupportedContent">
                        <ul className="clearfix">
                            <li className="active"><Link to="/"><i className="icon icon-House"></i><span>Home</span></Link></li>
                            <li className="active"><Link to="/resume"><i className="icon icon-User"></i><span>Resume</span></Link></li>
                            <li className="active"><Link to="/portfolio"><i className="icon icon-Bulb"></i><span>Portfolio</span></Link></li>
                            <li className="active"><Link to="/contact"><i className="icon icon-Imbox"></i><span>Contact</span></Link></li>
                        </ul>
                    </nav>
                    {/*<ExternalLink href="#" className="sidebarToggler">*/}
                    {/*    <span><span></span><span></span><span></span></span>*/}
                    {/*</ExternalLink>*/}
                </header>
            </>
        );
    }
}

export default Header;