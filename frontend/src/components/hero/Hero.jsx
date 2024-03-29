import React, { useState } from 'react'
import './static/css/styles.css'
import './static/css2/style.css'
import './static/css2/nunito-font.css'
const Hero = () => {
    const [state ,setState] =useState("State")
    return (
        <div>
            {/* Page Header */}
            <header className="masthead" style={{ backgroundImage: "url('static/assets/img/wine.jpg')" }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Crop Cycle Planning</h1>
                                <span className="subheading">From land to harvest, We're here to guide you. Find your ideal crop match</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content (replace with your form component) */}
            {/* Main Content (your form component) */}
            <div className="container px-4 px-lg-5">
                <div className="page-content">
                    {/* <div className="form-v9-content" style={{ backgroundImage: 'url("D:\Agri-Aid\frontend\src\components\hero\static\assets\img\form-v9.jpg")' }}> */}
                    <div className="form-v9-content" style={{ backgroundImage: 'url("/form-v9.jpg")' }}>
                        <form className="form-detail" action="/predict" method="post">
                            <h2>Please Fill The Information</h2>
                            <div className="form-row-total">
                                <div className="form-row">
                                    <label htmlFor="nitrogen_level">Nitrogen_level:</label>
                                    <input type="text" name="nitrogen_level" id="nitrogen_level" className="input-text" placeholder="Nitrogen level" required />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="phosphorus_level">Phosphorus level:</label>
                                    <input type="text" name="phosphorus_level" id="phosphorus_level" className="input-text" placeholder="Phosphorus level" required />
                                </div>
                            </div>
                            <div className="form-row-total">
                                <div className="form-row">
                                    <label htmlFor="potassium_level"> Potassium level:</label>
                                    <input type="text" name="potassium_level" id="potassium_level" className="input-text"
                                        placeholder="Potassium level" required />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="temperature">Temperature:</label>
                                    <input type="text" name="temperature" id="temperature" className="input-text"
                                        placeholder="Temperature" required />
                                </div>
                            </div>
                            <div className="form-row-total">

                                <div className="form-row">
                                    <label htmlFor="humidity"> Humidity:</label>
                                    <input type="text" name="humidity" id="humidity" className="input-text"
                                        placeholder="Humidity" required />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="ph"> pH:</label>
                                    <input type="text" name="ph" id="ph"
                                        className="input-text" placeholder="pH" required />
                                </div>
                            </div>
                            <div className="form-row-total">

                                <div className="form-row">
                                    <label htmlFor="rainfall"> Rainfall:</label>
                                    <input type="text" name="rainfall" id="rainfall"
                                        className="input-text" placeholder="Rainfall" required />
                                </div>
                                <div className="form-row">
                                    {/* this is a catrgotical  use dropdown */}
                                    <label htmlFor="state">State:</label>
                                    {/* <input type="text" name="state" id="state" className="input-text" placeholder="State"
                                        required/> */}
                                    <div class="dropdown">
                                        <button class="dropdown_input dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', textAlign:'left', color:'rgba(255, 255, 255, 0.3)',fontSize:'18px'}}>
                                            {state}
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-dark" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                            <li class="dropdown-item" onClick={()=>{setState("Andaman and Nicobar")}}>Andaman and Nicobar</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Andhra Pradesh")}}>Andhra Pradesh</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Assam")}}>Assam</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Chattisgarh")}}>Chattisgarh</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Goa")}}>Goal</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Gujarat")}}>Gujarat</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Haryana")}}>Haryana</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Himachal Pradesh")}}>Himachal Pradesh</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Jammu and Kashmir")}}>Jammu and Kashmir</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Karnataka")}}>Karnataka</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Kerala")}}>Kerala</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Madhya Pradesh")}}>Madhya Pradesh</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Maharashtra")}}>Maharashtra</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Manipur")}}>Manipur</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Meghalaya")}}>Meghalaya</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Nagaland")}}>Nagaland</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Odisha")}}>Odisha</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Pondicherry")}}>Pondicherry</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Punjab")}}>Punjab</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Rajasthan")}}>Rajasthan</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Tamil Nadu")}}>Tamil Nadu</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Telangana")}}>Telangana</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Tripural")}}>Tripura</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Uttar Pradesh")}}>Uttar Pradesh</li>
                                            <li class="dropdown-item" onClick={()=>{setState("Uttrakhand")}}>Uttrakhand</li>
                                            <li class="dropdown-item" onClick={()=>{setState("West Bengal")}}>West Bengal</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row-last">
                                <input type="submit" name="register" className="register" value="Predict" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero