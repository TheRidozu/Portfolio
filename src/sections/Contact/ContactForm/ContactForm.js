import React from 'react';
import styled from 'styled-components';
import Heading from '../../../components/Heading/Heading';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h4{
        margin: 2rem 0;
        font-size: 2.8rem;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
        width: 100%;
    }
    input, textarea, button{
        padding: .9rem;
        height: 5%;
        width: 75%;
        border: 1px solid grey;
        border-radius: 0;
        background: transparent;
        margin: 1.1rem;
        font-size: 1.7rem;
        color: #D4C9C9;
        transition: .2s ease;
    }

    button{
        width: 15.1rem;
        cursor: pointer;
        transition: background-color .5s ease;
    }
    
    button:hover{
        background-color: #fff;
        color: black;
    }

    input::placeholder, textarea::placeholder{
        color: grey;
    }
    textarea{
        height: 17.2rem;
        resize: none;
    }
    input:focus, textarea:focus{
        border-color: #D4C9C9;
    }
    @media(min-width: 375px){
        input, textarea, button{
            font-size: 2rem;
        }

        form{
            margin: 2.5rem 0;
        }
        
    }
    @media(min-width: 750px){
        width: 60%;
    }
    `

const ContactForm = () =>{
    return(
        <Wrapper>
            <Heading>Write to me</Heading>
            <form>
                <input type="e-mail" placeholder="E-mail"/>
                <input type="text" placeholder="Name"/>
                <textarea placeholder="Message">
                </textarea>
                <button>Send</button>
            </form>
        </Wrapper>
    )
}

export default ContactForm;