import React, { useEffect, useState } from 'react'
// import './static/css/styles.css'
// import './static/css2/style.css'
// import './static/css2/nunito-font.css'
import axios from 'axios'
import "./Hero.css"
const Hero = () => {
    const backend_url = import.meta.env.VITE_BACKEND_URL
    const initialformdata = {
        nitrogen_level: "",
        phosphorus_level: "",
        potassium_level: "",
        temperature: "",
        humidity: "",
        ph: "",
        rainfall: "",
        state: "State"
    }
    const [formData, setFormData] = useState(initialformdata)
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(formData); // Log the entire formData object
        try {
            const response = await axios.post(`${backend_url}/get_data`, formData, {
                headers: { 'Content-Type': 'application/json' }, // Set headers for JSON data
            });

            if (response.status === 200) {
                // Handle successful response (e.g., display a success message)
                console.log('Data sent successfully! Response:', response.data);
                // Optionally handle returned data from the backend here
            } else {
                // Handle unexpected response status
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            // Handle errors during submission (e.g., network issues)
            console.error('Error sending data:', error);
        }
    };
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
                        <form className="form-detail" onSubmit={handleSubmit}>
                            <h2>Please Fill The Information</h2>
                            <div className="form-row-total">
                                <div className="form-row">
                                    <label htmlFor="nitrogen_level">Nitrogen_level:</label>
                                    <input type="text" name="nitrogen_level" id="nitrogen_level"
                                        className="input-text" placeholder="Nitrogen level" required
                                        value={formData.nitrogen_level}
                                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="phosphorus_level">Phosphorus level:</label>
                                    <input type="text" name="phosphorus_level" id="phosphorus_level"
                                        className="input-text" placeholder="Phosphorus level" required
                                        value={formData.phosphorus_level}
                                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
                                </div>
                            </div>
                            <div className="form-row-total">
                                <div className="form-row">
                                    <label htmlFor="potassium_level"> Potassium level:</label>
                                    <input type="text" name="potassium_level" id="potassium_level" className="input-text"
                                        placeholder="Potassium level" required
                                        value={formData.potassium_level}
                                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="temperature">Temperature:</label>
                                    <input type="text" name="temperature" id="temperature" className="input-text"
                                        placeholder="Temperature" required
                                        value={formData.temperature}
                                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
                                </div>
                            </div>
                            <div className="form-row-total">
                                <div className="form-row">
                                    <label htmlFor="humidity"> Humidity:</label>
                                    <input type="text" name="humidity" id="humidity" className="input-text"
                                        placeholder="Humidity" required
                                        value={formData.humidity}
                                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="ph"> pH:</label>
                                    <input type="text" name="ph" id="ph"
                                        className="input-text" placeholder="pH" required
                                        value={formData.ph}
                                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
                                </div>
                            </div>
                            <div className="form-row-total">

                                <div className="form-row">
                                    <label htmlFor="rainfall"> Rainfall:</label>
                                    <input type="text" name="rainfall" id="rainfall"
                                        className="input-text" placeholder="Rainfall" required
                                        value={formData.rainfall}
                                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
                                </div>
                                <div className="form-row">
                                    {/* this is a catrgotical  use dropdown */}
                                    <label htmlFor="state">State:</label>
                                    <div className="dropdown">
                                        <button className="dropdown_input dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', textAlign: 'left', color: 'rgba(255, 255, 255, 0.3)', fontSize: '18px' }}>
                                            {formData.state}
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Andaman and Nicobar" }) }}>Andaman and Nicobar</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Andhra Pradesh" }) }}>Andhra Pradesh</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Assam" }) }}>Assam</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Chattisgarh" }) }}>Chattisgarh</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Goa" }) }}>Goa</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Gujarat" }) }}>Gujarat</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Haryana" }) }}>Haryana</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Himachal Pradesh" }) }}>Himachal Pradesh</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Jammu and Kashmir" }) }}>Jammu and Kashmir</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Karnataka" }) }}>Karnataka</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Kerala" }) }}>Kerala</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Madhya Pradesh" }) }}>Madhya Pradesh</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Maharashtra" }) }}>Maharashtra</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Manipur" }) }}>Manipur</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Meghalaya" }) }}>Meghalaya</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Nagaland" }) }}>Nagaland</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Odisha" }) }}>Odisha</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Pondicherry" }) }}>Pondicherry</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Punjab" }) }}>Punjab</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Rajasthan" }) }}>Rajasthan</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Tamil Nadu" }) }}>Tamil Nadu</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Telangana" }) }}>Telangana</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Tripura" }) }}>Tripura</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Uttar Pradesh" }) }}>Uttar Pradesh</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "Uttrakhand" }) }}>Uttrakhand</li>
                                            <li className="dropdown-item" onClick={() => { setFormData({ ...formData, state: "West Bengal" }) }}>West Bengal</li>
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