import React, { Component } from 'react';
import '../../scss/Detail.scss';

class Detail extends Component {
    componentDidMount(){
        const {location, history} = this.props;
        console.log(location.state);

        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        const arrResult = this.props.location.state.result.split("-");
        
        if(location.state){
            return (
                <>
                <div className="d_container">
                    <h3>{location.state.title}</h3>
                    <hr></hr>
                    <div className="d-content">                        
                        <p>{location.state.desc}</p>
                        {/* <div className="d-content-result"> */}
                            <h5 className="d-title-result">Result</h5>
                            <ul>
                                {arrResult.map((value, index) => {
                                    return <li key={index}>{value}</li>
                                })}
                            </ul>
                        {/* </div> */}
                    </div>
                    
                    <div className="d-content-desc">
                        <h5 className="d-title-period">Period :</h5>
                        <p>{location.state.period}</p>
                        <h5 className="d-title-dev1">Server :</h5>
                        <p>{location.state.dev1}</p>
                        <h5 className="d-title-dev2">Client :</h5>
                        <p>{location.state.dev2}</p>
                        <h5 className="d-title-role">Role :</h5>
                        <p>{location.state.role}</p>
                    </div>
                </div>
                
                </>
            );
        }else{
            return null;
        }
        
    }
}

export default Detail;