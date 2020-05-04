import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap';
import fadeInAnimation from '../../Functions/FadeInAnimation';

//components
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Parag from '../../components/Parag/Parag';
import Icon from '../../components/Icon/Icon';
import Photo from '../../components/Photo/Photo';

// icons
import ball from '../../assets/icons/ball.svg';
import laptop from '../../assets/icons/laptop.svg';
import book from '../../assets/icons/book.svg';
import meImage from '../../assets/me.jpg';

const Content = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 85%;
    .iconWrapper{
        display: flex;
        justify-content: space-around;
        padding:  0 0 3.5rem 0;
        width: 100%;
        height: 20%;
    }
    .me{
        transform: rotateX(90deg);
    }
    @media(min-width: 600px){
        width: 60%;
    }
`

const AboutMe = () =>{

    const aboutMeIcons = [
        {
            link: ball,
            altText: 'ball'
        },
        {
            link: laptop,
            altText: 'laptop'
        },
        {
            link: book,
            altText: 'book'
        }
    ];

    const sectionRef = useRef(null),
          headerRef = useRef(null),
          imageRef = useRef(null),
          paragRef = useRef(null),
          icons = useRef([]);

    const fadeIn = () =>{
        const tl = new TimelineMax();
        tl.to(imageRef.current, .5,{
            opacity: 1,
            transform: 'rotateX(0)'
        }).to(paragRef.current, .5, {
            opacity: 1,
            transform: 'rotateX(0)'
        }).to(icons.current, .5,{
            opacity: 1
        })
    }

    useEffect(()=>{
        fadeInAnimation(sectionRef.current, fadeIn);
    })

    return(
        <SectionWrapper 
        id="aboutMe"
        ref={sectionRef}
        >
                <HeaderSection 
                className="first"
                ref={headerRef}
                >
                    About me
                </HeaderSection>
                <Content className="first">
                    <Photo src={meImage}
                        alt="Hubert Krzyszczyk"
                        secret 
                        ref={imageRef} 
                        />
                    <Parag
                    margin
                    secret
                    trans
                    ref={paragRef}
                    >

                    Hi, I'm Hubert, I live in Częstochowa. I am a graduate of IT technical college. Creating websites is my passion. He is also interested in personal development. I am an ambitious, hardworking and creative person. I like to take on new challenges and pursue my goal. In my free time I read books and play football
                    </Parag>
                    <div className="iconWrapper">
                        {
                            aboutMeIcons.map(({link, altText}) => 
                            <Icon
                                src={link} 
                                alt={altText}
                                key={altText}
                                ref={ref => icons.current.push(ref)}
                            />)
                        }
                    </div>
                </Content>
        </SectionWrapper>
    )
}

export default AboutMe;