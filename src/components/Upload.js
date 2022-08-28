import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

import upload from '../img/upload.jpg'


function Upload() {

  return (
    <div class="">
      
     <header class="my-5">
        
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div class="w-100 flex justify-center px-2">
              <img class="object-cover h-20 w-20 rounded-full border-4 border-green" src={upload} alt="StudyMode"/>
                
              <h1 class="text-3xl font-bold h-20 ml-5 mt-3">Upload Mode</h1>
            </div>

          </div>

          <div class="w-full md:w-6/12 px-4">
            <Link to="/">
            <img class="mx-auto w-3/5 " src={logo} alt="logo"/>
            </Link>
          </div>
        </div>

      </header>
        
      <div class="flex justify-center ">
        
        <div class="py-6 px-6 bg-green-300 rounded-2xl w-2/3">
          
          <div class="space-y-4">
            <div class="flex justify-evenly space-x-5">
              <input type="text" placeholder="Title" class="text-sm py-3 px-4 rounded-lg w-1/2 outline-none" />
              <input type="text" placeholder="Your Name" class="text-sm py-3 px-4 rounded-lg w-1/2 outline-none" />
            </div>

            <div>
              <div class=" flex justify-left space-x-auto my-3">
                <label for="underline_select" class="text-left font-bold mr-3 p-2">  to Study : </label>
                  <select id="underline_select" class=" text-sm rounded-2xl p-2 border-0 border-b-2 border-gray-200">
                      <option selected="">Choose a country</option>
                      <option value="ja">Japan</option>
                      <option value="ko">Korea</option>
                  </select>
              </div>
              <textarea id="content" rows="6" class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg "  maxlength='1000' placeholder="Your message..."></textarea>
              
            </div>
            
            <div>
              <div class=" flex justify-left space-x-auto my-3">
                <label for="underline_select" class="text-left font-bold mr-3 p-2">  to practice typing : </label>
                  <select id="underline_select" class=" text-sm rounded-2xl p-2 border-0 border-b-2 border-gray-200">
                      <option selected="">Choose a country</option>
                      <option value="ja">Japan</option>
                      <option value="ko">Korea</option>
                  </select>
              </div>
              <textarea id="message" rows="6" class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg" maxlength='1000' placeholder="Your message..."></textarea>
              
            </div>
            

          </div>

          <div class="text-left font-bold mt-5">
            Topic : 
            <br/>
            <textarea id="message" rows="1" class="block p-5 mt-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg" maxlength='1000' placeholder="Your message..."></textarea>
              
          </div>

          <div class="text-center mt-6 mx-auto">
            <button class="py-3 px-3 text-xl text-white bg-purple-400 rounded-2xl">Create</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Upload