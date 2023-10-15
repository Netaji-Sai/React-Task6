import { Component } from "react";

class Skills extends Component{
    render(){
        return(
            <div class="container mt-5">
            <div><center><h2 className="contactHead">Skills</h2></center></div>

            <div className="row">
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Programming Languages
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-brands fa-java"></i> Java <i class="fa-brands fa-python"></i> Python</h5>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Database Management
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-solid fa-database"></i> MongoDB</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                    <div class="card my-4">
                        <div class="card-header">
                            Web-Development
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-brands fa-html5"></i> HTML <i class="fab fa-css3"></i> CSS <i class="fa-brands fa-js"></i> JS  <i class="fa-brands fa-react"></i>  ReactJS <br/><i class="fa-brands fa-php"></i> PHP</h5>
                        </div>
                    </div>
                </div>

            <div className="row mt-5">
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Cloud Technologies
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa-brands fa-aws"></i> Amazon Web Services</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Data Analysis
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa fa-bar-chart"></i> Numpy, Pandas, R script<br/>Machine Learning</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Languages Known
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa fa-cogs" aria-hidden="true"></i>-English-Telugu-Hindi-</h5>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            </div>
        );
    }
}

export default Skills;