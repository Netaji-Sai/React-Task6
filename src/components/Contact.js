import { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div class="container mt-5">
                <div><center><h2 className="contactHead">For Services & Collaborations feel free to Contact</h2></center></div>
                <div className="row">
                    <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Email Me!</h5>
                        <p className="card-text"><i className="fas fa-envelope"></i></p>
                        <p><a href="mailto:netajisuru2004@gamil.com">Netaji Sai Suru</a></p>
                        </center>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Call Me!</h5>
                        <p className="card-text"><i className="fa fa-phone"></i></p>
                        <p><a href="mailto:netajisuru2004@gamil.com">+91 6302455515</a></p>
                        </center>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Location!</h5>
                        <p className="card-text"><i className="fa fa-map-marker"></i></p>
                        <p>Srikakulam, India</p>
                        </center>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">LinkedIn!</h5>
                        <p className="card-text"><i className="fab fa-linkedin"></i></p>
                        <p><a href="https://www.linkedin.com/in/netaji-sai-suru-05b941234/">Netaji-Sai-Suru</a></p>
                        </center>
                        </div>
                    </div>
                    </div>
                
                </div>

                <div className="row mt-5">

                <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">GitHub!</h5>
                        <p className="card-text"><i className="fa-brands fa-github"></i></p>
                        <p><a href="https://github.com/Netaji-Sai/">Netaji-Sai-Suru</a></p>
                        </center>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card one">
                        <div className="card-body">
                        <center>
                        <h5 className="card-title">Instagram!</h5>
                        <p className="card-text"><i class="fa-brands fa-instagram"></i></p>
                        <p><a href="https://instagram.com/this_is_me_netaji?igshid=MzMyNGUyNmU2YQ==">Netaji-Sai</a></p>
                        </center>
                        </div>
                    </div>
                </div>

                </div>
                <br/>
            </div>

        );
    }
}

export default Contact;