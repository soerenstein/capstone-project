import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}
/* @font-face {
  font-family: 'Montserrat';
  font-style: medium;
  font-weight: 400;
  src: url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');  IE9 Compat Modes 
  src: local('Montserrat'), local('Montserrat'),
} */

@font-face {
    font-family: 'Montserrat Medium';
    font-style: medium;
    font-weight: normal;
    src: local('Montserrat Medium'), url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap') format('woff');
  }

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.4;
    overflow: hidden;
    height: 100vh;
    
}

input, button, textarea {
    font-size: 0.75em;
  }
`


  