import styled from 'styled-components';
export const ButtonContainer=styled.button `

text-transform:Capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--mainGreen);
color:var(--mainGreen);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0rem;
transition:all 0.5s ease in out;
&:hover
{
    background:var(--mainGreen);
    color:var(--mainGreen);
}
&:focus
{
    outline:none;
}




`;