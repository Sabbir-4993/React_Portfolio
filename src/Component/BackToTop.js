import React from "react";
import $ from 'jquery';
import {ExternalLink} from "react-external-link";


class BackToTop extends React.Component{
    componentDidMount() {
        var back = $("#backtotop"),
            body = $("body, html");
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > $(window).height()){
                back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
            } else {
                back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
            }
        });
        body.on("click", "#backtotop", function (e) {
            e.preventDefault();
            body.animate({scrollTop: 0}, 800);
            return false;
        });
    }

    render() {
        return(
            <>
                <ExternalLink href="#" id="backtotop"><i className="icofont-bubble-up"></i></ExternalLink>
            </>
        );
    }
}

export default BackToTop;