import React, { Component } from 'react';
import '../scss/About.scss';

class About extends Component {
    constructor(props) {
        super(props);
        this.mouseOverHandle = this.mouseOverHandle.bind(this);

        this.state = { 
            isHovering : false,
            skillDesc:null,
            skillList : [
                {   
                    id:1,
                    title:"JAVA",
                    desc:"OOP에 대한 정확한 이해-API(Documentation)이해 및 활용 가능-상속, Capsulation 개념 이해 및 사용 가능-조건, 반복문 등을 사용한 알고리즘 구현-Thread 기술 적용-MVC에 기반한 패키징, 클래스 정의-I/O 및 Socket 통신에 대한 이해 및 활용"
                },
                {
                    id:2,
                    title:"JSP",
                    desc:"JSP 작성 가능-JSTL 사용으로 View 페이지 내의 JAVA 코드 지양"
                },
                {
                    id:3,
                    title:"JDBC, Servlet",
                    desc:"SQL문 (CRUD) 을 통한 테이블 생성/수정/삭제/검색 가능-VO, DAO, Controller, View, Servlet을 활용한 MVC 구현"
                },
                {
                    id:4,
                    title:"Spring / MyBatis",
                    desc:"Spring MVC 구현-Setting ＞ web.xml, bean 등록, annotation, pom.xml 등-Business Logic Layer와 Presentation Layer 구현-MVC에 대한 정확한 이해-AOP 이해/작성"
                },
                {
                    id:5,
                    title:"XML",
                    desc:"XML 설정-VO, DAO, Controller, Dispatcher-Servlet 등 XML 설정을 통한 MVC 구현"
                },
                {
                    id:6,
                    title:"JavaScript",
                    desc:"View 페이지 상에서의 자바 코드 구현 및 Ajax 기술 적용"
                },
                {
                    id:7,
                    title:"jQuery",
                    desc:"Selector, Event 등 구현-Ajax, Json 기술 적용-jQuery UI"
                },
                {
                    id:8,
                    title:"react.js",
                    desc:"JSX, ES6, Virtual DOM, 단반향 데이터 흐름 지향에 대한 이해-컴포넌트를 사용하여 재사용성, 확장성, 결합성, 캡슐화 이해 및 활용 가능-REDUX를 사용하여 각 컴포넌트의 의존성을 낮추고, 유지보수 편의를 위한 구현 가능-불변함을 지키며 상태 관리 구현 가능"
                },
                {
                    id:9,
                    title:"HTML5, SCSS, Bootstrap",
                    desc:" "
                }
            ]
        };
    }
   
    mouseOverHandle = (e) => {
        const sid = e.target.id - 1;
        const strDesc = this.state.skillList[sid].desc.split("-");
        console.log(this.state.skillList[sid].desc.split("-"));
        
        this.setState({skillDesc: strDesc});
        this.setState(this.toggleHoverState);

    }
    toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }
    
    render() {
        const _skillList = this.state.skillList;
        //var lists = [];
        //var i = 0;

        // while(i < _skillList.length){
        //     lists.push(
        //         <div id={`${_skillList[i].id}`} 
        //             key={_skillList[i].id}
        //             onMouseLeave={this.handleMouseHover}
        //             onMouseEnter={(e)=>{
        //                 this.mouseOverHandle(e)
        //             }}
        //         >
        //             {_skillList[i].title}
        //         </div>
        //     )
        //     i++;
        // }

        const sList = _skillList.map((skill,index) =>
            <li key={index}
                id={`${skill.id}`}
                onMouseLeave={this.mouseOverHandle}
                onMouseEnter={(e)=>{
                this.mouseOverHandle(e)
            }}>
                {skill.title}
            </li>
        );
        
        return (
            <>
            <div className="a_container" id="scroll_2">
                <div className="a_contents">
                    <h1>ABOUT ME!</h1>
                    <hr className="a-title-line"></hr>
                    <div className="a-contents-intro">
                        <div className="a-contents-desc">
                            안녕하십니까!<br />
                            프론트엔드 개발자를 지향하는 한보원입니다.<br />
                            더 나은 결과를 위해 끊임 없이 생각하는게 즐겁습니다.<br />
                            항상 스스로를 계발하는 개발자가 되고 싶습니다. 
                        </div>
                        {/* <div className="a-contents-img">
                            <img src={idea} alt="idea"></img>
                        </div> */}
                    </div>
                </div>
                <div className="a-contents-skill">
                        <p className="skills-title">SKILLS :</p>
                        <ul>
                            {sList}
                        </ul>
                        <hr class="a-skill-line"></hr>
                        {/* <div className="a-contents-list-section"> */}
                            {
                                this.state.isHovering &&
                                
                                this.state.skillDesc.map((value,index)=>{
                                    return (
                                        <>
                                        <div className="a-contents-list-div">
                                            <p className="a-contents-list" key={index}>· {value}<br /></p>
                                        </div>
                                        </>
                                    )
                                }) 
                            } 
                        {/* </div> */}
                    </div>
            </div>
            </>
        );
    }
}

export default About;
