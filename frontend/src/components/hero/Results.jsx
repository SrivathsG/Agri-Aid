import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Markdown from 'react-markdown';
import '../Navbar.css';

const Results = () => {
    const location = useLocation();
    const prediction = location.state?.prediction;
    const instruction = location.state?.instruction;
    const crop = location.state?.crop
    const explanation = location.state?.explanation
    const [showImage, setShowImange] = useState(false)
    console.log(crop);
    const handleViewMore = () => {
        setShowImange(!showImage)
    }

    return (
        <div className='font-roboto text-2xl flex flex-col min-h-screen text-left'> {/* Full viewport height */}
            <div className='container-full flex flex-col justify-start'> {/* Left-aligned content */}
                <div className='w-full' >
                    <h1 className='mt-4 mb-4' >{prediction}</h1>
                    <p className='mb-4'>{explanation}</p>

                </div>
                <div className='w-full'>
                    <button
                        className='font-normal text-2xl rounded-xl text-white bg-green-700 py-2 px-4 mb-4'
                        onClick={handleViewMore}>
                        {showImage ? 'View Less' : 'View More'}
                    </button>
                    {showImage && (
                        < img
              src={`/${crop}_plt.png`} // Replace with your image path
                    alt="View More Details"
                    className="w-3/4 h-auto object-cover" // Adjust image styles as needed
            />
          )}
                </div>
                <div className='w-full mb-5 '>
                    <Markdown
                        className='container bg-gray-200 pt-4 pb-4 overflow-y-scroll max-h-96 rounded-lg border-2 border-green-700 styled-scrollbar'
                    >
                        {instruction}
                    </Markdown>
                </div>
            </div>
        </div>
    );
};

export default Results;
