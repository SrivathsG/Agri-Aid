import React, { useState } from 'react'
import './Hero.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Results = () => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            {/* Page Header */}
            {loading && (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <header className="masthead" style={{ backgroundImage: "url('static/assets/img/wine.jpg')" }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                {/* <h3>We recommend you to grow Papaya </h3> */}
                                <span className="subheading">We recommend you to grow Papaya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content (replace with your form component) */}
            {/* Main Content (your form component) */}
            {/* <div className="container px-4 px-lg-5">
                <div className="page-content">
                    <div className="form-v9-content" style={{ backgroundImage: 'url("D:\Agri-Aid\frontend\src\components\hero\static\assets\img\form-v9.jpg")' }}>
                    <div className="form-v9-content" style={{ backgroundImage: 'url("/form-v9.jpg")' }}>
                        <form className="form-detail" onSubmit={handleSubmit}>
                            <h2>Please Fill The Information</h2>
                            <div className="form-row-total">

                            </div>
                            <div className="form-row-last">
                                <button type="submit" name="register" className="register">Predict</button>
                            </div>
                            <p>{model_output}</p>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Results