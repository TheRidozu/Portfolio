import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import { TimelineMax } from 'gsap';
import fadeInAnimation from '../../Functions/FadeInAnimation';
import ContactForm from './ContactForm/ContactForm';
const SocialMedia = styled.ul`
    width: 100%;
    list-style: none;
    margin: 4rem 0;
    h4,p{
        padding: .9rem;
        text-align: center;
        opacity: 0;
    }
    h4{
        font-size: 2.8rem;
        position: relative;
        bottom: 4rem;
        opacity: 0;
    }
    p{
        font-size: 1.8rem;
        position: relative;
    }
    .icon{
        opacity: 0;
    }
    .link{
        top: 4rem;
    }
    .wariot{
        opacity: 0;
    }
    @media(min-width: 750px){
        &{
            padding: 5rem;
            border: 5px dashed grey;
            transition-property: border,color;
            transition-duration: .3s, .6s;
            transition-timing-function: ease-out;
            color: grey;
            margin: 7rem 0;
            width: 50%;
        }
    }

`;
const Icons = styled.li`
    margin: 1.6rem auto;
    padding: .3rem;
    width: 23rem;
    font-size: 2.5rem;
    .icon{
        opacity: 0;
        position: relative;
        right: 300px;
    }

    img{
        height: 3.6rem;
        width: 3.6rem;
    }
    p{
        text-align: left;
        padding: 0;
        padding-left: 2rem;
        position: relative;
        left: 300px;
        opacity: 0;
        
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: grey;
        transition: color .3s .3s ease-in-out;
    }

    a:hover{
        color: white;
    }
    @media(min-width: 375px){
        img{
            height: 4.5rem;
            width: 4.5rem;
        }
    }
`;
const Contact = ({contactIcons}) =>{

    const sectionRef = useRef(null),
          mailsRef = useRef([]),
          linksRef = useRef([]),
          iconsRef = useRef([]),
          descriptionsRef = useRef([]);


    const fadeIn = () =>{
        const tl = new TimelineMax();
        tl.to(mailsRef.current, .5, {
            opacity: 1,
            y: 40,
        }).to(linksRef.current, .5, {
            opacity: 1,
            y: -40
        }, '-=.5').
        to(iconsRef.current, .5, {
            opacity: 1,
            x: 300
        }).to(descriptionsRef.current,.5,{
            opacity: 1,
            x: -300
        }, '-=.5')
        
    }

    useEffect(()=>{
        fadeInAnimation(sectionRef.current, fadeIn);
    })



    return(<SectionWrapper
        ref={sectionRef}
        column
        margin
        id="contact"
        >
        <HeaderSection>Contact</HeaderSection>
        <SocialMedia>
            <h4 className="mail" ref={ref => mailsRef.current.push(ref)}>E-mail:</h4>
            <p className="link" ref={ref => linksRef.current.push(ref)}>bercik.krzyszczyk@gmail.com</p>
            <h4 className="mail" ref={ref => mailsRef.current.push(ref)}>Phone</h4>
            <p className="link" ref={ref => linksRef.current.push(ref)}>736-889-169</p>
            {
                contactIcons.map(({link, alt, description})=>(
                    <Icons key={alt}>
                        <a href="#"><img key={link} src={link} alt={alt} className="icon"
                        ref={ref => iconsRef.current.push(ref)}/>
                        <p className="wariot" ref={ref => descriptionsRef.current.push(ref)}>{description}</p></a>
                    </Icons>
                ))
            }
        </SocialMedia>
        <ContactForm/>  
    </SectionWrapper>
    )
};

export default Contact;