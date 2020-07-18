import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    background-color:#2c3e50;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  button {
    cursor:pointer;
  }

`
