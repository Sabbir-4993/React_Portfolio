import React from "react";
import {Link} from "react-router-dom";

import $ from 'jquery';

class Sidebar extends React.Component{
    componentDidMount() {
        $('.sidebarToggler').on('click', function(e){
            e.preventDefault();
            if($('body').hasClass('SideBarOpend')){
                $(".sidebar").mCustomScrollbar("destroy");
            }else{
                $(".sidebar").mCustomScrollbar();
            }
            $('body').toggleClass('SideBarOpend');
        });

        $('.sidebarOverlay, .widget_closer').on('click', function(){
            $('body').removeClass('SideBarOpend');
            $(".sidebar").mCustomScrollbar("destroy");
        });
    }

    render() {
        return(
            <>
                <div className="sidebar">
                    <a href="javascript:void(0);" className="widget_closer"><i className="icofont-close-line"></i></a>
                    <div className="widget widget-search">
                        <h3 className="widget_title">Search</h3>
                        <form method="post" action="#" className="search_form">
                            <input type="text" name="s" placeholder="Enter Keword" />
                            <button type="submit"><i className="icon icon-Search"></i></button>
                        </form>
                    </div>
                    <div className="widget widget-search">
                        <h3 className="widget_title">Categories</h3>
                        <ul>
                            <li><Link to="/">Web</Link>(18)</li>
                            <li><Link to="/">Startup</Link>(11)</li>
                            <li><Link to="/">Branding</Link>(17)</li>
                            <li><Link to="/">UI UX</Link>(23)</li>
                            <li><Link to="/">Agency</Link>(19)</li>
                        </ul>
                    </div>
                    <div className="widget">
                        <h3 className="widget_title">
                            Recent Posts
                        </h3>
                        <div className="singleRecent">
                            <img src="assets/images/blog/7.jpg" alt="" />
                                <span>01 Apr, 2021</span>
                                <Link to="/">
                                    Create your next web site with Unity.
                                </Link>
                        </div>
                        <div className="singleRecent">
                            <img src="assets/images/blog/8.jpg" alt="" />
                                <span>31 Mar, 2021</span>
                                <Link to="/">
                                    Truly unique hundreds of elements.
                                </Link>
                        </div>
                        <div className="singleRecent">
                            <img src="assets/images/blog/9.jpg" alt="" />
                                <span>26 Mar, 2021</span>
                                <Link to="/">
                                    Easily create unlimited amount of custom.
                                </Link>
                        </div>
                    </div>
                    <div className="widget">
                        <h3 className="widget_title">Tags</h3>
                        <div className="tabclouds">
                            <Link to="/">Web Design</Link>
                            <Link to="/">Development</Link>
                            <Link to="/">CSS</Link>
                            <Link to="/">Studio</Link>
                            <Link to="/">Award</Link>
                            <Link to="/">Mobile</Link>
                            <Link to="/">IOS</Link>
                            <Link to="/">IOS</Link>
                            <Link to="/">UI / UX</Link>
                            <Link to="/">Portfolio</Link>
                        </div>
                    </div>
                </div>
                <div className="sidebarOverlay"></div>
            </>
        );
    }
}

export default Sidebar;