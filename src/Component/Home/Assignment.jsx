import React from 'react';
import card from '../../../public/Card.json'

const Assignment = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold my-12'>Assignments</h1>
                <div className='flex flex-wrap justify-center gap-4'>
                {
                    card?.slice(0,6).map((e,idx)=> <div className='border-2 border-purple-800 shadow-purple-600 shadow-inner rounded-xl text-left p-3 w-96 h-auto my-4' key={idx}>
                        <img src={e.Photo} className='w-96 h-60 mb-4 ' alt="" />
                        <h1 className='text-2xl font-semibold '>{e.CourseName}</h1>
                        <h3>Level : {e.Level}</h3>
                        <h3>Course Fee : {e.CourseFee}</h3>
                        <h5>Mark : {e.Marks}</h5>
                        {/* <h4>{e.Details}</h4> */}
                        <button className='btn bg-purple-800  text-white mt-5'>SUBMIT</button>
                         </div>)
                }
                </div>
                <div><button className="btn border-orange-700 border-2 ">Explore More</button></div>
            </div>
        </div>
    );
}

export default Assignment;
