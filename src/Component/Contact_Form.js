import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact_Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        window.alert('Message Send Successfully!');

        emailjs.sendForm('service_r9404xq', 'template_yt7ci89', form.current, 'user_2mq34F2xrlKEfo7KMvI9O')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" className="required" name="name" placeholder="Full Name *" required="" />
                </div>
                <div className="col-lg-6">
                    <input type="text" className="required" name="email" placeholder="Email *" required="" />
                </div>
                <div className="col-lg-6">
                    <input type="text" name="phone" placeholder="Phone"/>
                </div>
                <div className="col-lg-6">
                    <input type="text" className="required" name="subject" placeholder="Subject *" />
                </div>
                <div className="col-lg-12">
                    <textarea name="message" className="required" placeholder="Message *"></textarea>
                </div>
                <div className="col-lg-12">
                    <button type="submit" value="Send" className="btt_btn"><span><i className="icon icon-Mail"></i>Send Message</span></button>
                </div>
            </div>
        </form>
    );
};

export default Contact_Form;