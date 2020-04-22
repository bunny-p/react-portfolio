import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Project.scss';
//import PropTypes from 'prop-types';
//import Detail from './Detail';
//import Detail from './Detail.js';
//import { Route, BrowserRouter as Router } from "react-router-dom";
//import { connect } from 'react-redux';
//import Modal from 'react-modal';
import univ_bs from '../../img/univ_bs.jpg';
import univ_sk1 from '../../img/univ_sk1.jpg';
import univ_sk2 from '../../img/univ_sk2.jpg';
import univ_sk3 from '../../img/univ_sk3.jpg';
import univ_sk4 from '../../img/univ_sk4.jpg';
import univ_sk5 from '../../img/univ_sk5.jpg';
import ap1 from '../../img/ap1.jpg';
import ap2 from '../../img/ap2.jpg';
import mcm1 from '../../img/mcm1.jpg';
import mcm2 from '../../img/mcm2.jpg';


class Project extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            pId:0,
            projectList:[
                { 
                    id:0,
                    title:"백석대학교 평생교육원 수강신청 사용자/관리자 시스템 개발",
                    shorten_title:"백석대학교-평생교육원 수강신청",
                    desc:"백석대학교 평생교육원 수강신청을 위한 사이트로 학점은행제, 일반, 민간(일반/특수), 특별 수강신청 기능 별로 구성하였으며, 관리자가 쉽게 수강신청과 관련된 사이트의 전반적인 기능을 따로 컨트롤 할 수 있도록 연동한 프로젝트입니다.",
                    period:"2017.11.13 ~ 2017.12.22",
                    dev1:"JAVA, JSP, Oracle",
                    dev2:"jQuery, JavaScript, HTML5, CSS2 & CSS3",
                    role:"전반적인 백 오피스 CRUD",
                    result:"기존에 오류가 많았던 관리자 홈페이지 개선/연령층이 높은 수강신청 접수자에 맞춘 간소화 프로세스-배너, 팝업, 설문조사, 강의 평가, 수강료 감면 등 문서 작업을 모두 시스템화",
                    img:univ_bs
                },
                {
                    id:1,
                    title:"서경대학교 평생교육원 온라인 수강신청",
                    shorten_title:"서경대학교-평생교육원 수강신청",
                    desc:"서경대학교 평생교육원 온라인 수강신청은 평생교육원 학생들의 수강신청을 위한 프로그램으로 기존 불필요한 부분들과 기능 개선을 위한 프로젝트입니다. 사용자들의 편의성을 위해 UX를 고려하여 신규 개발하였습니다.",
                    period:"2017.02.20 ~ 2017.03.21",
                    dev1:"JAVA, JSP, Altibase, MySql",
                    dev2:"jQuery, JavaScript, Bootstrap, HTML5, CSS2 & CSS3",
                    role:"단독 프로젝트, UI/UX, 프론트-백단 처리, 디자인, 반응형, 쿼리 작업",
                    result:"모바일, 태블릿으로 수강신청 및 확인 가능. 편리성 증가-파격적인 UI 변화로 수강신청 등록 및 처리 시간 절약",
                    img:univ_sk1

                },
                { 
                    id:2,
                    title:"서경대학교 예술종합평생교육원 포탈 온라인 출결 개발",
                    shorten_title:"서경대학교-예술종합평생교육원 출결",
                    desc:"서경대학교 예술종합평생교육원 포탈 온라인 출결 프로그램은 교수 및 평생교육원 관리자들이 학생들의 과목 별 출결을 관리하는 프로그램입니다. 비효율적으로 개발된 프로그램의 문서 승인 처리 및 관리를 개선하기 위한 프로젝트입니다.",
                    period:"2016.12.05 ~ 2017.02.13",
                    dev1:"JAVA, JSP, Altibase, MySql",
                    dev2:"Flash Player 9.0, Flex",
                    role:"Flex 화면단 처리, 쿼리 CRUD 작업",
                    result:"기존에는 문서로 승인 처리. 개발 후 효율적인 단계 별 담당자 승인처리 반영 및 시스템화-UI/UX 개선과 Hierarchy 반영으로 교수 및 관리자의 작업 효율 증가",
                    img:univ_sk2
                },
                { 
                    id:3,
                    title:"서경대학교 예술종합평생교육원 온라인 입학원서접수 개발",
                    shorten_title:"서경대학교-예술종합평생교육원 원서접수",
                    desc:"서경대학교 예술종합평생교육원 온라인 입학원서접수는 평생교육원 학생들이 전기/후기에 온라인으로 원서접수할 수 있는 공간입니다. 기존에 낙후되어 있었던 입학원서접수 페이지를 신규 개발한 것으로, 사용자들의 편의성을 중점으로 UI 및 기능 개선한 프로젝트입니다.",
                    period:"2016.05.02 ~ 2016.11.24",
                    dev1:"JAVA, JSP, Altibase, MySql",
                    dev2:"jQuery, JavaScript, Bootstrap, HTML5, CSS2 & CSS3",
                    role:"단독 프로젝트, UI/UX, 프론트-백단 처리, 디자인, 반응형, 쿼리 작업.",
                    result:"URL : https://apps.skuniv.ac.kr/lifeedu/secsemester/ UI와 디자인 개선으로 PC, 태블릿, 모바일에서 간편하게 사용 가능-GA 설정하여 데이터 분석/추적하도록 하여 어떤 에러가 발생하였는지 추적 가능-GA 분석 결과 기존 원서접수 최종 등록까지 평균 5~10분 소요되었으나,-리뉴얼 후 최종 등록까지 평균 1~2분 소요-한국인 70% 이상이 사용하는 네이버 검색 노출을 위한 네이버 신디케이션 연동-op(open graph) 태그 사용하여 검색엔진 최적화. 웹 개방성../Slack 연동으로 실시간으로 접수자 확인 및 오류 대처 가능-메일침프 연동으로 안내 메일과 지속적인 홍보 가능",
                    img:univ_sk3
                },
                { 
                    id:4,
                    title:"서경대학교 개인정보보호약관관리",
                    shorten_title:"서경대학교-개인정보보호약관관리",
                    desc:"서경대학교 개인정보보호약관관리는 각 부서 별로 분산되어 따로 관리되던 약관들을 하나로 통합하여 생성, 배포 등 체계적으로 관리할 수 있는 프로젝트입니다.",
                    period:"2015.11.12 ~ 2016.03.10",
                    dev1:"JAVA, JSP, Altibase, MySql",
                    dev2:"jQuery, JavaScript, HTML5, XHTML, CSS2 & CSS3",
                    role:"서비스 로직 적용, 화면 UI 및 출력 작업",
                    result:"관리자는 여러 학부/부서에 대한 개인정보약관 생성/수정/삭제/업로드를 하나의 시스템에서 관리-학생/교수/교원에 대한 개인정보약관 동의 내용을 시스템으로 관리",
                    img:univ_sk4
                },
                { 
                    id:5,
                    title:"서경대학교 등기 우편 관리 시스템 구축",
                    shorten_title:"서경대학교-등기 우편 관리",
                    desc:"서경대학교 등기 우편 관리 시스템은 우편물이 배송될 경우 자동으로 해당 우편물 미수령자에게 SMS를 전송하며, 수령자는 사인패드에 사인을 함으로써, 종이 낭비와 체계적으로 우편물 수령 및 관리를 할 수 있는 프로그램입니다. 수동적으로 사람이 하던 우편물 관리를 시스템화 함으로써 사용자의 신뢰감을 높이고, 바코드 스캐너의 입력을 기본으로 편의성을 강화한 프로젝트입니다.",
                    period:"2015.09.14 ~ 2015.10.30",
                    dev1:"JAVA, JSP, Altibase, MySql",
                    dev2:"JAVA, JSP, Altibase, MySql",
                    role:"서비스 로직 적용, canvas 사용하여 사인 insert/update 작업",
                    result:"기존 우편물 작업 처리 총무과에서 단 한명이 담당. 우편 관리 일 처리로 다른 업무에 피해-바코드 스캐너 입력을 사용하여 수작업에서 자동화로 편의성 강화, 일의 효율성을 높임-SMS 전송 기능 추가. 우편물 미수령자에게 알림 서비스//우편물 수령인의 서명은 서명 패드로 받도록 하여 시스템화 관리 가능",
                    img:univ_sk5
                },
                { 
                    id:6,
                    title:"AMORE PACIFIC 프로젝트 - Chatter",
                    shorten_title:"AMORE PACIFIC-Chatter",
                    desc:"AMORE PACIFIC 의 Chatter 프로그램은 일의 특성상 PC 사용이 어려운 영업 사원과 판매 사원이 모바일 상에서 실시간으로 컴플레인, 업무, 판매실적 등을 공유하기 위한 시스템입니다.",
                    period:"2015.07 ~ 2015.09",
                    dev1:"SalesForce 기반의 Cloud, Apex",
                    dev2:"VisualForce, HTML5, jQuery, JavaScript",
                    role:"UI, 서버/클라이언트 단 개발",
                    result:"모바일에서 실행 가능하도록 하여 실시간으로 컴플레인/업무/판매실적 등 전달 용이-카페, 블로그, 카카오스토리 등 파트 별로 분산되어 있던 시스템 통합",
                    img:ap1
                },
                { 
                    id:7,
                    title:"AMORE PACIFIC 프로젝트 - 공지사항",
                    shorten_title:"AMORE PACIFIC-공지사항",
                    desc:"AMORE PACIFIC 의 공지사항 프로그램은 국내/해외 파트의 시스템을 통합하여, 하나의 시스템에서 업무에 대한 모든 공지에 대한 내용을 확인할 수 있습니다. 또한, 모바일에서도 실시간으로 공지 확인이 가능합니다.",
                    period:"2015.07 ~ 2015.09",
                    dev1:"SalesForce 기반의 Cloud, Apex",
                    dev2:"VisualForce, HTML5, jQuery, JavaScript",
                    role:"UI, 서버/클라이언트 단 개발",
                    result:" 분산되어있던 업무 별, 국내/해외 파트 시스템 통합하여 관리 용이/Hierarchy 적용-모바일에서 실행 가능. 출근전/후, 매장에서 실시간으로 공지 확인 가능-판매 실적 등 그래프화하여 시각적으로 접근 가능",
                    img:ap2
                },
                { 
                    id:8,
                    title:"MCM 프로젝트 - 회의실 예약",
                    shorten_title:"MCM-회의실 예약",
                    desc:"MCM 의 회의실 예약 프로그램은 회의실 예약 및 원거리 화상/음성 회의 시스템입니다. 업무상 한 장소에 모이기 힘든 점을 고려하여 원거리 화상/음성 회의가 가능합니다.",
                    period:"2015.03 ~ 2015.04",
                    dev1:"SalesForce 기반의 Cloud, Apex",
                    dev2:"VisualForce, ExtJS, HTML5, jQuery, JavaScript",
                    role:"UI, 서버/클라이언트 단 개발",
                    result:"프로그램화 하여 효율적인 회의실 예약 가능/원거리 화상/음성 회의 가능",
                    img:mcm1
                },
                { 
                    id:9,
                    title:"MCM 프로젝트 - Selling Campaign",
                    shorten_title:"MCM-Selling Campaign",
                    desc:"MCM 의 Selling Campaign 은 매장에 배치할 제품을 구매하는 프로그램입니다. 모바일만 있다면, 시간에 구애받지 않고 구매 및 관리가 가능합니다.",
                    period:"2015.01 ~ 2015.02",
                    dev1:"SalesForce 기반의 Cloud, Apex",
                    dev2:"VisualForce, HTML5, jQuery, JavaScript",
                    role:"UI, 서버/클라이언트 단 개발",
                    result:" 백화점 매니저가 새 제품 구입 후 매장에 배치까지 문서로 작업한 것을 프로그램으로 관리/구매 이력 관리-실시간으로 구매 금액/제품 사진 확인 가능",
                    img:mcm2
                }
            ]
        }
    }

    render() {
        var id = 0;

        var title = null;
        var desc = null;
        var period = null;
        var dev1 = null;
        var dev2 = null;
        var role = null;
        var result = null;

        const _projectList = this.state.projectList;
        console.log(_projectList);
        
        var lists = [];
        var i = 0;
        while(i < _projectList.length){
            id     = _projectList[i].id;
            title  = _projectList[i].title;
            desc   = _projectList[i].desc;
            period = _projectList[i].period;
            dev1   = _projectList[i].dev1;
            dev2   = _projectList[i].dev2;
            role   = _projectList[i].role;
            result = _projectList[i].result;

            const arrTitle = _projectList[i].shorten_title.split("-");
            console.log(arrTitle);

            lists.push(
            <div className="p-figure" key={_projectList[i].id} id={_projectList[i].id}>
            <Link className="link-detail"
                to={{
                pathname:`/project/${id}`,
                state:{
                    id:id,
                    title:title,
                    desc:desc,
                    period:period,
                    dev1:dev1,
                    dev2:dev2,
                    role:role,
                    result:result
                }
            }}>
                <div className="p-content-img">
                    <img src={_projectList[i].img} alt={_projectList[i].shorten_title}></img>
                    <div className="p-content-desc">                        
                        {arrTitle.map((value, index) => {
                                return <h5 key={index}>{value}</h5>
                            })}
                    </div>
                </div>
                
               </Link>
               </div>
               /* <button id={_projectList[i].id} 
                                onClick={function(e){
                                    e.preventDefault();
                            //bowon(e.target.getAttribute('id'));
                            this.setState({ pId:e.target.getAttribute('id') })
                        }.bind(this)}>
                    </button> */
             );
             i++;
         }
         
        return (
            
            <div id="scroll_1" className="p-container">           
                <ul>
                    <li>
                        {/* <Link to={`/${this.state.pId}`}>{lists}</Link> */}
                        {/* <Link to={{
                            pathname:`/project/${id}`
                        }}>{lists}</Link>  */}
                        {lists}
                    </li>


                </ul>
            </div>
            
        );
    }
}
// Project.propTypes = {
//     id: PropTypes.number.isRequired
// }

export default Project;