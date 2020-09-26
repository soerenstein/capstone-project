import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;

}

/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: medium;
  font-weight: 400;
  src: url('../Design/Fonts/montserrat-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
       url('../Design/Fonts/montserrat-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../Design/Fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../Design/Fonts/montserrat-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../Design/Fonts/montserrat-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../Design/Fonts/montserrat-v15-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
}

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
    height: 100vh;
}

:root {
    --button-white: #ffffff 0% 0% no-repeat padding-box; 
    --white: #ffffff;
    --black: #000000; 
    
    --gradient-orange: linear-gradient(
    0deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%);
    --gradient-orange-shadow: linear-gradient(
    0deg,
    rgba(255, 171, 29, 0) 0%,
    rgba(248, 80, 28, 1) 100%);
    --gradient-orange-45: linear-gradient(
    45deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%
  );
  
  --shadow-grey: 0px 5px 10px #00000029;
}
`
