import React, { Component } from 'react';
import '../scss/Home.scss';
import home_me from '../img/home_me.jpg';

class Home extends Component {
    render() {
        return (
            <div className="h_container" id="scroll_0">
                <div className="h-img-sec">
                    <img className="h-me" src={home_me} atl="home_me"></img>
                </div>
                <div className="h-title-sec">
                    <h1>
                        <p className="h-title-fst">"프론트엔드 개발자 </p>
                        <p className="h-title-sec">한보원의 포트폴리오 입니다!"</p>
                        <hr></hr>
                    </h1>
                    
                    <p className="h-desc">REACT.JS를 활용한 포트폴리오 입니다.</p>
                </div>
            </div>
        );
    }
}

export default Home;