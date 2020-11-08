import React from 'react';
import styled, {css} from 'styled-components';


const StyledButton = styled.button`
   padding: 1rem;
   font-size: 1rem;
   border: 1px solid red;
   outline: none;
   cursor: pointer;
   color: #fff;
   background-color: #333;
   // if you want to work with props this will be the way of doing it
   // also bring css from styled components
   // so even after you nest more properties it will work
   ${({primary}) => 
      primary && 
      css`
         color: pink;
         background-color: ${({bgColor}) => bgColor};
      `
   } 
`

// whenever you want to another button with same properties but with maybe a different color
const DifferentButton = styled(StyledButton)`
   font-size: 3rem;
   color: green;
`

const Button = ({children, primary, bgColor}) => {


   return (
      // properties are coming from the App file
      <>
      <StyledButton primary={primary} bgColor={bgColor}>{children}</StyledButton>
      <DifferentButton >{children}</DifferentButton>
      </>
   )
   
}


export default Button;