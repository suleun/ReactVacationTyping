/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import study from '../img/study.jpg'
import fighting from '../img/figthing.jpg'
import upload from '../img/upload.jpg'
import logo from '../img/logo.png'

import Modal from '../components/modals/Modal';

function Home() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

  return (
    
    <div class="h-screen bg-green-200">
        
        <header>
        <img class="mx-auto w-1/3" src={logo} alt="logo"/>
        </header>

        <button onClick={openModal}>언어선택</button>
        <Modal open={modalOpen} close={closeModal} header="Choose Language"/>


        <div class="flex justify-evenly space-x-5 mt-5">
         
            <div class="border-2 border-green-500 bg-white rounded cursor-pointer ">
                <Link to="/prac">
        
                    <div class="flex justify-center px-2 mx-3 my-2">
                        <img class="mx-auto rounded-full" src={study} alt="StudyMode"/>
                        
                    </div>
                    <h1 class="text-3xl font-bold">Study Mode</h1>
        
                </Link>
            </div>
        
            <div class="border-2 border-green-500 rounded cursor-pointer bg-white">
                <Link to="/game">
                    <div class="flex justify-center px-2 mx-3 my-2">
                        <img class="mx-auto rounded-full" src={fighting} alt="GameMode"/>
                    </div>

                    <h1 class="text-3xl font-bold">Game Mode</h1>
                </Link>
            </div>

            <div class="border-2 border-green-500 rounded cursor-pointer bg-white">
                
                <Link to="/upload">

                    <div class="flex justify-center px-2 mx-3 my-2">
                        <img class="mx-auto rounded-full " src={upload} alt="UploadMode"/>
                    </div>

                    <h1 class="text-3xl font-bold">Upload Mode</h1>
                </Link>
            </div>
                    

        </div>
    

    </div>
  )
}



export default Home