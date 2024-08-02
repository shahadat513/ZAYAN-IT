import React from 'react';
import instruction from '../../../public/Instruction.json'
import Quality from '../../../public/Quality.json'
import Rivision from '../../../public/Rivision.json'
import Delivery from '../../../public/Delivery.json'
import Version from '../../../public/Version.json'

import Lottie from "lottie-react";

const Services = () => {
    return (
        <div className='my-20 '>
            <h1 className='text-5xl font-bold my-12'>Why we use this</h1>
            <div className='flex flex-wrap gap-10 justify-center mt-12 '>
                <div className='bg-amber-50 rounded-sm '>
                    <h1 className='text-lg mt-2 font-medium'>Assignment Instructions</h1>
                    <Lottie animationData={instruction} className='w-52 '/>
                </div>
                <div className='bg-amber-50 rounded-sm '>
                    <h1 className='text-lg mt-2 font-medium'>Code Quality</h1>
                    <Lottie animationData={Quality} className='w-52 '/>
                </div>
                <div className='bg-amber-50 rounded-sm '>
                    <h1 className='text-lg mt-2 font-medium'>Feedback & Revisions</h1>
                    <Lottie animationData={Rivision} className='w-52 '/>
                </div>
                <div className='bg-amber-50 rounded-sm '>
                    <h1 className='text-lg mt-2 font-medium'>Submission Deadline</h1>
                    <Lottie animationData={Delivery} className='w-52 '/>
                </div>
                <div className='bg-amber-50 rounded-sm '>
                    <h1 className='text-lg mt-2 font-medium'>Version Control</h1>
                    <Lottie animationData={Version} className='w-52 '/>
                </div>
           </div>
        </div>
    );
}

export default Services;
