import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import study from '../img/study.jpg'

function Prac() {
  const [posts, setPost] = useState([]);
  const [allPosts, setAllPost] = useState([]);
  const [color, setColor] = useState();

  let result;
  let countPage = 1;

  function getAllPosts(){
    const getPost = async () => {
        const allPosts = await (await fetch('http://localhost:3001/posts')).json();
        setAllPost(allPosts);
    };

    getPost();

  }

  function go(prams){
    countPage = prams;
    // 객체 하나만 색 바꾸는거 해야함 
    setColor('red');
    getLists();

  }

  function getLists() {    
    
    const getPost = async () => {
        const posts = await (await fetch('http://localhost:3001/posts/'+countPage)).json();
        setPost(posts);
    };

    getPost();

  }

  
  window.onload=function() {
    document.getElementById("preview").onclick=processText;
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
    getAllPosts();
  }, []);


  return (
    
    <div>
    
      <header class="my-5">
        
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div class="w-100 flex justify-center px-2">
              <img class="object-cover h-20 w-20 rounded-full border-4 border-green" src={study} alt="StudyMode"/>
                
              <h1 class="text-3xl font-bold h-20 ml-5 mt-3">Study Mode</h1>
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
          </div>
        </div>

      {/* 타자연습 공간 */}
        <div class="bg-white rounded border-2 shadow-xl p-4 w-2/5 mx-5">
        
          <div class="bg-blue-200 rounded p-5 ">
            
            {posts.SContent}

          </div>
          <div class="bg-white rounded p-5 border mt-3">
            
            {posts.TContent}

            <hr class="my-2 border-2"/>
            <input class="border-2 w-full" id='inputbox' onKeyPress={(e)=>{
              if(e.key === 'Enter' ){
                processText();
                if(result === (posts.TContent)){
                  alert(result +"는 다른 말로 " + posts.SContent);
                  // 이게 맞으니까 다음거 보여주셈
                  countPage++;

                  getLists()
                }else{
                  alert("잘못 입력하셨습니다.")
                }
                
              }
            }} ></input>
         
          </div>
        </div>

        <div class="bg-green-100 rounded-2xl border-2 border-green-200 shadow-xl p-6 w-1/5 mx-10 text-left font-bold">
          <div class="font-normal text-sm">👾 The person who registered </div>
          Title : {posts.title}
          <br/>
          Made by : {posts.author}
        </div>


      </div>


      <footer class="relative pt-8 pb-6 mt-2">
        <h1>
          목록 (클릭 시 이동합니다)
        </h1>
        <div class="container mx-auto px-4 flex justify-evenly space-x-auto">
            
          {
            allPosts.map((post) => (
              <div style={{ color }} onClick={(e)=>{go(post.id, e)} } 
                key={post.id} class="bg-green-100 rounded-2xl border-2 border-green-200 p-6 w-1/5 mx-10 text-left">
                Title : {post.title}
                <br/>
                Made by : {post.author}
              </div>
            ))
          }
        
                
        </div>
      </footer>


    </div>
  )
}

export default Prac