"use client"

import React, { useState } from "react";
import { Title, TitleSm } from "@/components/common/Title";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import { isValidEmail } from '@/utils/check-email';
import axios from 'axios';

const Contact = () => {
  const [error, setError] = useState({ email: false, required: false });
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    timeframe: ''
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name && userInput.budget && userInput.timeframe) {
      setError({ ...error, required: false });
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name || !userInput.budget || !userInput.timeframe) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      const res = await axios.post('/api/send-email', userInput);

      if (res.status === 200) {
        toast.success('Message sent successfully!');
        console.log("message sent")
        setUserInput({
          name: '',
          email: '',
          message: '',
          budget: '',
          timeframe: ''
        });
      }
    } catch (error) {
      toast.error('Failed to send the message. Please try again later.');
    }
  }

  return (
    <section className='contact bg-top'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='CONTACT' /> <br /><br />
          <Title title="Let's start right now!" className='title-bg' />
        </div>
        <div className='content py flex1'>
          <div className='left w-30'>
            <div className='contact-deatils'>
              <div className='box'>
                <FiHeadphones size={30} className='icons' />
                <h3>+91 83290 29230</h3>
                <span>Call us: Mon - Fri 9:00 am - 6:00 pm</span>
              </div>
              <div className='box'>
                <IoLocationOutline size={30} className='icons' />
                <h3>India</h3>
                <span>1 Al Malang Manzil, Indira Nagar Khopoli, 410202</span>
              </div>
              <div className='box'>
                <FiHelpCircle size={30} className='icons' />
                <h3>info@innovtechs.com</h3>
                <span>Drop us a line anytime!</span>
              </div>
              <div className='box'>
                <BiUserCircle size={30} className='icons' />
                <h3>hr@innovtechs..com</h3>
                <span>Career at Innovtechs</span>
              </div>
            </div>
            <ul>
              <li className='icon'><BsFacebook size={25} /></li>
              <li className='icon'><AiFillBehanceCircle size={25} /></li>
              <li className='icon'><AiFillInstagram size={25} /></li>
              <li className='icon'><AiFillLinkedin size={25} /></li>
            </ul>
          </div>
          <div className='right w-70'>
            <TitleSm title='Make an online enquiry' />
            <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

            <form>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>Name</span>
                  <input
                    type="text"
                    name='user_name'
                    maxLength="100"
                    required={true}
                    onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                    onBlur={checkRequired}
                    value={userInput.name}
                  />
                </div>
                <div className='inputs'>
                  <span>Email</span>
                  <input
                    type="email"
                    name='user_email'
                    maxLength="100"
                    required={true}
                    value={userInput.email}
                    onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                    onBlur={() => {
                      checkRequired();
                      setError({ ...error, email: !isValidEmail(userInput.email) });
                    }}
                  />
                  {error.email &&
                    <p className="text-sm text-red-400">Please provide a valid email!</p>
                  }
                </div>
              </div>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>your budget</span>
                  <input 
                    type='text' 
                    name="user_budget"
                    value={userInput.budget}
                    onChange={(e) => setUserInput({ ...userInput, budget: e.target.value })}
                  />
                </div>
                <div className='inputs'>
                  <span>timeframe</span>
                  <input 
                    type='text'
                    name="timeframe" 
                    onChange={(e) => setUserInput({ ...userInput, timeframe:e.target.value })}
                    onBlur={checkRequired}
                    value={userInput.timeframe}
                  />
                </div>
              </div>
              <div className='inputs'>
                <span>TELL US A BIT ABOUT YOUR PROJECT</span>
                <textarea cols='30' rows='10'
                  maxLength="500"
                  name="message"
                  required={true}
                  onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                  onBlur={checkRequired}
                  value={userInput.message}
                />
              </div>
              <div>
                <button 
                  className='button-primary'
                  role="button"
                  onClick={sendEmail}
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
