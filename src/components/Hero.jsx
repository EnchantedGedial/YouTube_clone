import React from 'react'

const Hero = () => {
  return (
    <>
    <section class="text-gray-600 body-font pt-0 w-11/12 m-auto">
  <div class="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ultimate Productive YouTube
   
      </h1>
      <p class="mb-8 leading-relaxed">
YouTubeLearn is a customized video sharing platform that eliminates distractions, filters non-educational content, and provides a focused environment for learning new skills. With a vast library of high-quality educational content, personalized recommendations, and a vibrant community of learners and experts, YouTubeLearn maximizes productivity by allowing users to concentrate solely on acquiring knowledge and improving their abilities.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Courses</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Tutorials</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=2000"/>
    </div>
  </div>
</section>
      
    </>
  )
}

export default Hero
