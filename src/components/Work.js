import { Component } from "react";

class Work extends Component{
    render(){

        const r1 = process.env.PUBLIC_URL + '/role1.jpg';
        const r2 = process.env.PUBLIC_URL + '/role2.jpg';
        const r3 = process.env.PUBLIC_URL + '/role3.jpg';
        return(
            <div class="container mt-5">
                <div><center><h2 className="contactHead">Looking to work as Intern/Full-time/Part-time as:</h2></center></div>
                
                <div className="row">

                    <div className="col-md-4 mb-2 one">
                    <div class="card one">
                        <img class="card-img-top" src={r1} alt="role-1"/>
                        <div class="card-body">
                            <p class="card-text">Full Stack Web Developer</p>
                        </div>
                    </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mb-2 ">
                    <div class="card one ">
                        <img class="card-img-top" src={r2} alt="role-1"/>
                        <div class="card-body">
                            <p class="card-text">Data Scientist</p>
                        </div>
                    </div>
                    </div>
                    <br/>

                </div>
            </div>

        );
    }
}

export default Work;