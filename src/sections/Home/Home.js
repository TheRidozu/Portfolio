import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap';

//components
import Heading from '../../components/Heading/Heading';
import Parag from '../../components/Parag/Parag';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

const Image = styled.img`
    height: 17rem;
    width: 17rem;
    opacity: 0;
    @media only screen and (min-width: 414px){
        &{
            height: 20rem;
            width: 20rem;
        }
    }
    @media(min-width: 568px) and (orientation: landscape){
        &{
            height: 17rem;
            width: 17rem;
        }
    }
`

const Home = ({
    heading, 
    description, 
    suitImage, 
    swipe
})=>
{
    const welcome = useRef(null),
          desc = useRef(null),
          suit = useRef(null),
          down = useRef(null)

    const fadeIn = () =>{
            const tl = new TimelineMax();
            tl.to(welcome.current, 1.5, {
                y: -65,
                opacity: 1,
            })
            .to(desc.current, 1.5, {
                y: -65,
                opacity: 1
            }, '-=1')
            .to(suit.current, 1.5, {
                y: -45,
                opacity: 1
            }, '-=1')
            .to(down.current, 1, {
                opacity: 1,
                y: '-50px',
                repeat: -1,
                yoyo:true,
        }, '-=1')

    }
    useEffect(()=>{
        fadeIn();
    });
    
    return(
        <SectionWrapper
        minHeight
        bgImg
        column
        id="home"
        >
            <Heading
            ref={welcome}
            secret
            >
                {heading}
            </Heading>
            <Parag 
            secret
            ref={desc}
            >
                {description}
            </Parag>
            <Image  
            src={suitImage} 
            alt={suitImage}
            ref={suit}
            />
            <Parag
            secret
            top
            ref={down}
            >
                {swipe}
            </Parag>
        </SectionWrapper>
    )
}

export default Home;