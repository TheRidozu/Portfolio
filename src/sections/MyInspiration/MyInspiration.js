import React, { useRef, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import fadeInAnimation from '../../Functions/FadeInAnimation';
import { TimelineMax } from 'gsap';
//components
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import myinspiration1 from '../../assets/myinspiration1.jpg';
import myinspiration2 from '../../assets/myinspiration2.jpg';
import myinspiration3 from '../../assets/myinspiration3.jpeg';



const Inner = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 24rem);
    justify-content: center;
    width: 100%;
    padding: 7rem 2.5rem;
    grid-gap: 2.5rem;
    img{
        width: 100%;
        height: 100%;
        opacity: 0;
        position: relative;
        right: 20rem;
    }
    div{
        grid-column: 2/3;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: white;
        padding: 1rem;
        opacity: 0;
        bottom: 20rem;
        position: relative;
    }
    .photo2{
        grid-column: 2/3;
        grid-row: 2/3;
    }
    .photo2_inner{
        grid-column: 1/2;
        grid-row: 2/3;
    }
    h3{
        font-size: 2.5rem;
        margin: .4rem 0;
        text-align: center;
    }
    p{
        font-size: 1.6rem;
        text-align: center;
        padding: .5rem;
    }
    @media(min-width: 650px){
        width: 85%;
        grid-template-rows: 30rem 30rem 30rem;
        div{
            background: transparent;
        }
        img{
            padding: 3rem;
        }
    }
    @media(min-width: 650px){
        width: 75%;
    }
    @media(min-width: 890px){
        width: 60%;
        grid-template-rows: 35rem 35rem 35rem;
    }
`;

const MyInspiration = () =>{

    const box = [
        {
            link: myinspiration1,
            altText: 'Photo of my girlfriend',
            header: 'My inspiration',
            description: 'Thanks to her I have motivation to act and a head full of ideas'
        },
        {
            link: myinspiration2,
            altText: 'Photo with my girlfriend',
            header: 'My Love',
            description: 'Thanks to her every day becomes more beautiful. She is the most important for me and I can always count on her'
        },
        {
            link: myinspiration3,
            altText: 'Photo with my girlfriend in prom',
            header: 'My Best Friend',
            description: 'Thanks to her I have great support. He will always listen, advise and help me.'
        }
    ];

    const sectionRef = useRef(null),
          photosRef = useRef([]),
          descriptionsRef = useRef([]);

        const fadeIn = () =>{
        const tl = new TimelineMax();
        tl.to(photosRef.current, .8, {
            opacity: 1,
            x: '20rem'
        })
        .to(descriptionsRef.current, .8, {
            y: '20rem',
            opacity: 1,
        })
    }

    useEffect(()=>{
        fadeInAnimation(sectionRef.current, fadeIn);
    })

    return(
        <SectionWrapper ref={sectionRef}>
            <Inner>
                {
                    box.map(({link, altText, header,description}, index)=>(
                        <Fragment key={altText}>
                            <img 
                            src={link} 
                            alt={altText} 
                            className={`photo${index+1}`}
                            ref={ref => photosRef.current.push(ref)}
                            />
                            <div 
                            className={`photo${index+1}_inner`}
                            ref={ref => descriptionsRef.current.push(ref)}
                            >
                                <h3>{header}</h3>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </Fragment>
                    ))
                }
            </Inner>
        </SectionWrapper>
    )
}

export default MyInspiration;