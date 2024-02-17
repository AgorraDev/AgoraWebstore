import React from 'react';
import {link} from 'react-router-dom';
import About from '../components/about';
import Navigation from '../components/nav';


function AboutPage() {
  return (
    <>
    {/*Bootstrap link*/}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"crossorigin="anonymous"/>
    {/*Links End*/}
      <Navigation /> 
      <About />

    </>
  );
}

export default AboutPage;
