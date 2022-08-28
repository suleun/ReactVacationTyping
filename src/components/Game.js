import React, { useEffect, useState } from 'react'

import logo from '../img/logo.png'

import fighting from '../img/figthing.jpg'
import { Link } from 'react-router-dom'

function Game() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

  let result;
  let countPage = 1;
  let sum = 0;

  const [posts, setPost] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          alert("Your Score : " + score);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);


  function getLists() {    
    
    const getPost = async () => {
        const posts = await (await fetch('http://localhost:3001/posts/'+countPage)).json();
        setPost(posts);
    };

    getPost();

  }

  function processText() {
    var txtBox = document.getElementById("inputbox");
    var lines = txtBox.value.split("\n");
  
    var resultString  = "";
    for (var i = 0; i < lines.length; i++) {
      resultString += lines[i];
    }
  
    result = resultString; 
  }

  useEffect(() => {
    getLists();
  }, []);


  return (
    <div>
      <header class="my-5">
        
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div class="w-100 flex justify-center px-2">
              <img class="object-cover h-20 w-20 rounded-full border-4 border-green" src={fighting} alt="StudyMode"/>
                
              <h1 class="text-3xl font-bold h-20 ml-5 mt-3">Game Mode</h1>
            </div>

          </div>

          <div class="w-full md:w-6/12 px-4">
            <Link to="/">
            <img class="mx-auto w-3/5 " src={logo} alt="logo"/>
            </Link>
          </div>
        </div>

      </header>

      <div class="flex justify-evenly space-x-auto">
        <div class="bg-white rounded-2xl border-2 shadow-xl p-6 w-1/5 mx-10">
          <div class="text-left font-bold">
            
            to study : {posts.toStudy}
            <br/>
            to Practice typing : {posts.toPrac}
            <br/>
            Topic : {posts.topic}
            
            <hr class="my-2 border-2"/>

            <div class="font-normal text-sm">👾 The person who registered </div>
            Title : {posts.title}
            <br/>
            Made by : {posts.author}
          </div>
        </div>

      {/* 타자연습 공간 */}
        <div class="bg-white rounded border-2 shadow-xl p-4 w-2/5 mx-5">
        
          <div class="bg-blue-200 rounded p-5">
            {posts.SContent}
          </div>
          <div class="bg-white rounded p-5 border mt-10">
          
          <input class="border-2 w-full p-3" id='inputbox' 
          placeholder="Please enter it in to practice typing" 
            onKeyPress={(e)=>{
              if(e.key === 'Enter' ){
                processText();
                if(result === (posts.TContent)){
                  alert(posts.SContent +" 의 뜻은 " + result);
                  // 이게 맞으니까 다음거 보여주셈
                  countPage++;
                  sum +=100;
                  setScore(sum);
                  getLists()
                }else{
                  alert("잘못 입력하셨습니다.")
                }
                
              }
            }} ></input>
                  
          </div>
        </div>

        <div class="bg-green-100 rounded-2xl border-2 border-green-200 shadow-xl p-6 w-1/5 mx-10 text-left font-bold space-y-10">
         
          <div class="bg-green-500 rounded-2xl p-6 text-center font-bold">
            TIME
            <h2>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h2>
            
          </div>

          <div class="bg-green-500 rounded-2xl p-6 text-center font-bold">
            SCORE
            <br/>
            {score}
           
          </div>
        </div>


      </div>

    </div>
  )
}

export default Game