import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import { TimelineMax } from 'gsap';
import Project from '../../assets/Project.png';
import Heading3 from '../../components/Heading3/Heading3';
import hubi from '../../assets/hubi.png';
import fadeInAnimation from '../../Functions/FadeInAnimation';

const Content = styled.div`
text-align: center;
width: 100%;
margin: 3rem 0;
position: relative;
min-height: 15vh;
background: transparent;
    div{
        margin-bottom: 3rem;
    }
    img{
        width: 22rem;
        height: 14.3rem;
    }
    a{
        display: inline-block;
        width: 18rem;
        padding: 1.2rem;
        text-decoration: none;
        color: grey;
        border: 3px solid black;
        border-radius: 3rem;
        font-size: 1.8rem;
        color: black;
        transition: transform .5s ease;
        
    }
    a:hover{
        color: white;
        background: #000000;
        transform: scale(1.1);
    }

    .ninja{
        position: absolute;
        display: block;
        top: 50%;
        transform: translate(0, -50%);
    }

    .box{
        margin: 3.5rem 0;
        opacity: 0;
    }

    .hide{
        display: none;
    }
    @media(min-width: 375px){
        div{
            margin-bottom: 0;
        }
    }
    @media(min-width: 750px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        .ninja{
            height: 100%;
            width: 50%;
        }
    }
`
const Projects = () =>{
        const project = useRef(null),
              headingRef = useRef(null);
        const fadeIn = () =>{
            const tl = new TimelineMax();
            tl.to('.ninja', 1.2, {
                x: '150vw',
                display: 'none'
            }).to('.box', .8,{
                display: 'block',
                opacity: 1,
            })
        }

        const blackMood = element =>{
            const tl = new TimelineMax();
            tl.to(element, .5, {
                background: 'black',
                color: 'white'
            })
        }

        const whiteMood = element =>{
            const tl = new TimelineMax();
            tl.to(element, .5, {
                background: 'white',
                color: '#696969'
            })
        }
        


    useEffect(()=>{

        const nav = document.querySelector('nav').getBoundingClientRect().height;
        window.addEventListener('scroll',()=>{
            if(project.current.getBoundingClientRect().top-nav<1 && project.current.getBoundingClientRect().top>-project.current.getBoundingClientRect().height+nav){
                blackMood('nav')
            }else{
                whiteMood('nav')
            }
        })


        fadeInAnimation(project.current, fadeIn);
    })

    const projectsTab = [
        {
            link: Project,
            altText: 'Barilo czy coś',
            description: 'Ogrodzenia Barilo',
            website: 'www.ogrodzeniabarilo.pl'
        },
        {
            link: Project,
            altText: 'dupa',
            description: 'Ogrodzenia Barilo',
            website: 'www.ogrodzeniabarilo.pl'
        },
        {
            link: Project,
            altText: 'xd',
            description: 'Ogrodzenia Barilo',
            website: 'www.ogrodzeniabarilo.pl'
        }
    ]

    return(
    <SectionWrapper whiteBg id="projects" ref={project}>
        <HeaderSection ref={headingRef}>
            Projects
        </HeaderSection>
        <Content>
        <img src={hubi} className="ninja" alt="Moje zdjęcie na którym wykonuje wejście smoka"/>
        {
            projectsTab.map(({link, altText,description, website })=>(
                <div 
                className="box"
                key={altText}
                >
                    <img src={link} alt={altText}/>
                    <Heading3>
                        {description}
                    </Heading3>
                    <a href={website}>
                        Visit website
                    </a>
                </div>

            ))
        }
        </Content>
    </SectionWrapper>
    )
}
export default Projects;