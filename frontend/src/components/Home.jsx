import React, { useEffect, useRef } from 'react';
import './Home.css'
const Home = () => {
    const modalRef = useRef(null);


    // Function to show the modal after 2 seconds
    function showModal() {
        setTimeout(() => {
            modalRef.current.classList.remove('hidden');
        }, 2000); // Adjust the time in milliseconds (2000ms = 2 seconds)
    }

    // Call the showModal function on page load
    window.addEventListener('load', showModal);
    useEffect(() => {
        window.addEventListener('load', showModal);
        return () => {
          window.removeEventListener('load', showModal);
        };
      }, []);
      
    const hideCookiesSection = ()=>{
        modalRef.current.classList.add('hidden')
    }
    return (
        <div className='home'>
            <section className='h-screen min-h-screen'>
                <div className='home-container bg-cover bg-center bg-no-repeat h-full rounded-md p-10'>
                    <div className="container-full p-5 h-full border border-white border-4 rounded-xl">
                        <div className='flex justify-between h-full w-full '>
                            <div className='h-full w-1/3 bg-white rounded-xl p-5 flex flex-col gap-10'>
                                <div className="logo">
                                    <img src="/final_logo.png" alt="" className='"h-auto w-auto max-h-20 max-w-full"' />
                                </div>
                                <div className='flex flex-col justify-between flex-grow relative'>
                                    <p className='text-inter text-5xl font-light text-left'>Optimize your next crop cycle with us for better results!</p>
                                    <button className='rounded-2xl bg-sky-200 py-2 px-8 w-1/2 absolute right-0 bottom-10 '>View More &#8594;</button>
                                </div>
                            </div>
                            <div className='h-full w-1/6 bg-white rounded-xl'></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-screen min-h-screen pt-10 pb-10 flex gap-6 container-full'>
                <div className='sm-container flex-shrink-0 rounded-md bg-sky-200 p-6 relative'>
                    <div className='h-full bg-white rounded-md flex justify-between flex-col'>
                        <div className="top-leftbox w-full relative">
                            <p className="absolute top-0 text-left  z-10 text-roboto text-3xl font-light leading-8 max-w-half font-normal">Why growing the right crop is important ?</p>
                            <div className='bg-sky-200 w-1/2 h-10 rounded-r-xl'></div>
                            <div className='bg-sky-200 w-3/4 rounded-r-xl h-10'></div>
                        </div>
                        <div className="text-container px-3 h-1/2" >
                            <p className='text-left text-monttserrat-alt text-2xl font-light leading-9 text-left'> Selecting the perfect crop is like finding the Goldilocks of the plant world. Not just any crop will do – it needs to be perfectly suited to your climate and soil. This ideal match leads to a thriving harvest that requires less water and suffers from fewer pests. By making this smart choice at the beginning, you save time, money, and resources, setting the stage for a successful and sustainable growing season.</p>
                        </div>
                        <div className="bottom-rightbox w-full h-28 relative">
                            <div className='bg-sky-200 w-1/2 h-14 rounded-l-xl absolute right-0 bottom-14'></div>
                            <div className='bg-sky-200 w-3/4 rounded-l-xl h-14 absolute right-0 bottom-0'></div>
                        </div>
                    </div>
                </div>
                <div className='sm-container flex-shrink-0 rounded-md bg-green-800 p-6 relative'>
                    <div className='h-full bg-white rounded-md flex justify-between flex-col'>
                        <div className="top-leftbox w-full relative">
                            <p className="absolute top-0 text-left  z-10 text-roboto text-3xl font-light leading-8 max-w-half text-white">How can we help you with your crop ? </p>
                            <div className='bg-green-800 w-1/2 h-10 rounded-r-xl'></div>
                            <div className='bg-green-800 w-3/4 rounded-r-xl h-10'></div>
                        </div>
                        <div className="bottom-rightbox w-full h-28 relative">
                            <div className='bg-green-800 w-1/2 h-14 rounded-l-xl absolute right-0 bottom-14'></div>
                            <div className='bg-green-800 w-3/4 rounded-l-xl h-14 absolute right-0 bottom-0'></div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="h-screen flex container-full ">
                <div className="last-container flex gap-5 h-4/5 w-full overflow-hidden">
                    <img src="/frame3.jpeg" alt="Frame 3" className="object-cover h-full w-3/5 rounded-lg" />
                    <div className="rightside flex-grow flex flex-col gap-5">
                        <div className="top h-3/5 w-full bg-green-700 rounded-lg px-5 py-10">
                            <div className="flex flex-col h-full w-full justify-between">
                                <p className="text-left font-roboto font-weight-300 text-4xl leading-tight text-gray-200">
                                    No more issues! Get all your doubts and issues cleared with us
                                </p>
                                <button className="rounded-xl text-white text-center text-2xl leading-tight font-light w-1/3 bg-avocado py-2">
                                    Next Page &#8594;
                                </button>
                            </div>
                        </div>
                        <div className="down flex-grow bg-avocado rounded-lg relative px-5">
                            <div className="feedback-container flex flex-col gap-5 px-5 absolute bottom-1/4 right-5 items-end">
                                <p className='font-normal text-4xl text-right'>For Feedback</p>
                                <button className='font-normal w-3/4 text-2xl rounded-xl text-white bg-green-700
                                py-2 px-4'>Click Me &#8594;</button>

                            </div>
                            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 w-52 h-full rounded-full bg-white opacity-80">
                            </div>
                            <div className="absolute w-32 h-3/5 rounded-full bg-avocado opacity-100 bottom-0 left-0 transform -translate-x-1/2 -translate-y-1/3"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={modalRef} className="fixed hidden max-w-md p-4 mx-auto bg-white border border-gray-200  left-12 bottom-16  rounded-2xl z-10">
                <h2 className="font-semibold text-gray-800 ">🍪 We use cookies!</h2>

                <p className="mt-4 text-sm text-gray-700 ">Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#" className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500">Let me choose</a>. </p>

                <p className="mt-3 text-sm text-gray-700 ">Closing this modal default settings will be saved.</p>

                <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
                    <button className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none" 
                    onClick={hideCookiesSection}>
                        Accept all
                    </button>
                    <button className=" text-xs border text-gray-800 hover:bg-gray-100  font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none" 
                    onClick={hideCookiesSection}>
                        Close
                    </button>
                </div>
            </section>





        </div>
    );
};

export default Home;
