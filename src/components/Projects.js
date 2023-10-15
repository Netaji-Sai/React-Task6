import { Component } from "react";

class Projects extends Component{
    render(){

        const p1 = process.env.PUBLIC_URL + '/Project1.png';
        const p2 = process.env.PUBLIC_URL + '/Project2.jpg';

        return(
            <div class="container mt-2">
                <div><center><h2 className="contactHead">Projects Developed by Me:</h2></center></div>
                
                <div class="jumbotron jumbotron-fluid">
                    <div class="container1 border border-secondary rounded">
                        <h1 class="display-6">Plant Disease Detection</h1>
                        <hr class="my-4"></hr>
                        <div class="smallContainer">
                        <img src={p1} class="small-image" alt="Proj1"/>
                        <p class="lead">
                            A Deep Learning model based on VGG19 architecture where the model is trained with large dataset of images <br/>
                            where the model continuosly increase its Accuracy and predict the Disease of given input plant image. <br/>
                            In this projct i have used : Python, R programming, DeepLearning Models.</p>
                        </div>
                    </div>
                </div>

                <div class="jumbotron jumbotron-fluid ">
                    <div class="container1 border border-secondary rounded mt-2">
                        <h1 class="display-6">Frontend of Food Delivery Website</h1>
                        <hr class="my-4"></hr>
                        <div class="smallContainer">
                        <img src={p2} class="small-image" alt="Proj2"/>
                        <p class="lead">Developed a website for Food Delivering app like swiggy.<br/>
                                        Technologies used for the project : HTML, CSS, JavaScript and BootStrap</p>
                                        </div>
                    </div>
                </div>

                <br/>
            </div>
            
        );
    }
}

export default Projects;