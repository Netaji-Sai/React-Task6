import { Component } from "react";

class Home extends Component{
    render(){

        const imageUrl = process.env.PUBLIC_URL + '/My Image.jpg';
        const compUrl = process.env.PUBLIC_URL + '/computer.png';
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src={imageUrl} alt="Me" class="img-fluid rounded border border-warning p-2 w-80 mt-5 slide-in "/>
                    </div>
                    <div class="col-md-8">
                        <div>
                            <h1 class="display-5">About Me</h1>
                            <p class="lead mt-5">
                                    Hello People!! I am Netaji Sai Suru.<br/>
                                    Computer Science student with passion on learning new things and implement new technologies <br/>
                                    In this comeptative world i always boost-up myself to work efficient by the skills.
                                    <ul class="lead mt-2">
                                        <li>Punctual, Stick to work organized</li>
                                        <li>Good at Task and Time Management</li>
                                        <li>Adaptable and continuous learning nature</li>
                                        <li>Self motivated in taking up new challenges.</li>
                                    </ul>
                            </p>
                            <img src={compUrl} alt="comp" className="comp"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;