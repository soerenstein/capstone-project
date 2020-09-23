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
`
