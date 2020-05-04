import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap';
import fadeInAnimation from '../../Functions/FadeInAnimation';
//components
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Heading from '../../components/Heading/Heading';
import Heading3 from '../../components/Heading3/Heading3';

//images 
import whatilike1 from '../../assets/whatilike1.jpg';
import whatilike2 from '../../assets/whatilike2.jpg';
import whatilike3 from '../../assets/whatilike3.png';
import whatilikebgs from '../../assets/whatilikebg_large.jpg';
import whatilikebgs2 from '../../assets/whatilikebg_small.jpg';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('${whatilikebgs2}');
    background-repeat: no-repeat;
    color: #D4C9C9;
    width: 100%;
    padding: 4rem 0;
    margin: 4rem 0;
    filter: grayscale(50%);
    .ninja2{
        display: block;
        height: 50%;
        width: 30%;
        position: relative;
        border-radius: 0;
    }
    .circle1, .circle3{
        position: relative;
        right: 400px;
        transform: rotate(-130deg);
    }
    .circle2{
        left: 400px;
        position: relative;
        transform: rotate(130deg);
    } 

    img{
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
        opacity: 0;
        margin: 2rem 0;
        filter: grayscale(80%);
    }

    p{
        margin: 2.3rem 0;
        font-size: 2.2rem; 
        text-align: center;
    }
    @media(min-width: 500px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 10rem auto;
        justify-items: center;
        width: 100%;
        flex-direction: row;
        h2{
            grid-column: 1/4;
        }
        img{
            width: 20rem;
            height: 20rem;
        }
    }
    @media(min-width: 641px){
        background-image: url('${whatilikebgs}');
        background-position: center bottom;
        background-attachment: fixed;
    }
`

const WhatILike = () =>{

    const whatILiketab = [
        {
            image: whatilike1,
            altText: 'La casa de papel',
            description: 'My best series',
        },
        {
            image: whatilike2,
            altText: 'Star Wars',
            description: 'My best movie',
        },
        {
            image: whatilike3,
            altText: 'Pug',
            description: 'My best animal',
        }
    ];

    const sectionRef = useRef(null),
          headingRef = useRef(null),
          circles = useRef([]);

    const fadeIn = () =>{
        const tl = new TimelineMax();
        tl.to(headingRef.current, .5, {
            opacity: 1,
            transform: 'rotateX(0)',
        }).to(circles.current[0],.6,{
            opacity: 1,
            transform: 'rotate(0deg)',
            x: 400
        },'-=.4').to(circles.current[1], .5, {
            transform: 'scaleY(1.2)',
            opacity: 1
        }).to(circles.current[2],.6,{
            opacity: 1,
            transform: 'rotate(0deg)',
            x: -400
        }, '-=.5').to(circles.current[3], .5, {
            transform: 'scaleY(1.2)',
            opacity: 1
        }).to(circles.current[4],.6,{
            opacity: 1,
            transform: 'rotate(0deg)',
            x: 400
        }, '-=.5').to(circles.current[5], .5, {
            transform: 'scaleY(1.2)',
            opacity: 1
        })
    }

    useEffect(()=>{
        fadeInAnimation(sectionRef.current, fadeIn)
    })
    

    return(
    <SectionWrapper  
    ref={sectionRef}
    >
        <Content>
        <Heading 
        secret trans 
        margin 
        ref={headingRef}
        >
            What I like
        </Heading>
            {
                whatILiketab.map(({image, altText, description}, index)=>{
                    return(
                    <div key={index}>
                        <img 
                        src={image} 
                        alt={altText}
                        ref={ref => circles.current.push(ref)}
                        className={`circle${index+1}`}
                        />
                        <Heading3
                        ref={ref => circles.current.push(ref)}
                        secret
                        white
                        trans
                        >
                            {description}
                        </Heading3>
                    </div>
                    )
                })
            }
        </Content>
    </SectionWrapper>
    )
}

export default WhatILike;