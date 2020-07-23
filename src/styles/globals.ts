import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    background-color:${props => props.theme.colors.primary};
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      transition:400ms;
  }

  button {
    cursor:pointer;
  }

`
