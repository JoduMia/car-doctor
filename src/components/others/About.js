import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className='grid md:grid-cols-2 gap-6 py-20'>
        <div className='relative pb-24 md:pb-0'>
            <img src={person} alt="" className='pr-20 h-[350px] rounded' />
            <img src={parts} alt="" className='w-[250px] h-[300px] rounded absolute left-[45%] top-40 border-8 border-white' />
        </div>

        <div className='space-y-3'>
            <p className='capitalize text-[#ff3811] font-bold text-xl'>about us</p>
            <h2 className='text-4xl md:text-5xl font-bold'>We are qualified <br /> & of experienced<br /> in this field</h2>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <button className='btn btn-sm bg-[#ff3811]'>Get more info</button>
        </div>

    </div>
  )
}

export default About