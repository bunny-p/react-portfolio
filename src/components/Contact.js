import React, { Component } from 'react';
import '../scss/Contact.scss';
//import contact from '../img/contact.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="c_container" id="scroll_3">
                <h1>I hope to meet you soon</h1>
                <hr></hr>
                <div className="c_contents">
                    {/* <div className="contents-img">
                        <img src={contact} alt="contact"></img>
                    </div> */}
                    <div className="contents-desc">
                        <p>안녕하세요! 프론트엔드 개발자 한보원입니다.</p>
                        <dl>
                            <dt>E-Mail :</dt>
                            <dd>hymnnn28@gmail.com</dd>
                            <dt>Github :</dt>
                            <dd>hdd</dd>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;