import React, { useEffect, useRef} from 'react';
import styled from 'styled-components';
import { TimelineLite, TweenMax } from 'gsap';
import fadeInAnimation from '../../Functions/FadeInAnimation';

//components
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Heading from '../../components/Heading/Heading';
import Icon from '../../components/Icon/Icon';

//Icons
import html from '../../assets/blackicons/html.svg';
import js from '../../assets/blackicons/js.png';
import css from '../../assets/blackicons/css.svg';
import bootstrap from '../../assets/blackicons/bootstrap.png';
import sass from '../../assets/blackicons/sass.svg';
import php from '../../assets/blackicons/php.svg';
import wordpress from '../../assets/blackicons/wordpress.png';
import react from '../../assets/blackicons/react.png';
import git from '../../assets/blackicons/git.png';
import python from '../../assets/blackicons/python.png';
import mysql from '../../assets/blackicons/mysql.svg';
const Technologies = styled.div`
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 85%;
    grid-gap: 6rem 0;
    justify-items: center;
    img:last-child{
        grid-column: 2/3;
    }
    @media only screen and (min-width: 375px){
        grid-gap: 5rem 0;
    }
    @media(min-width: 568px) and (orientation: landscape){
        grid-gap: 6rem 0;
        width: 70%;
        margin: 3rem 0;
    }
    
`
const Skills = () =>{

    const mainIcons = [
        {
            link: html,
            altText: 'HTML5'
        },
        {
            link: css,
            altText: 'CSS3'
        },
        {
            link: js,
            altText: 'JS'
        },
        {
            link: bootstrap,
            altText: 'Bootstrap'
        },
        {
            link: sass,
            altText: 'Sass'
        },
        {
            link: wordpress,
            altText: 'Wordpress'
        },
        {
            link: react,
            altText: 'React'
        },
    ];

    const basicIcons = [
        {
            link: php,
            altText: 'Php'
        },
        {
            link: mysql,
            altText: 'Mysql'
        },
        {
            link: python,
            altText: 'Python'
        },
        {
            link: git,
            altText: 'Git'
        },
    ];

    const sectionRef = useRef(null),
          section2Ref = useRef(null),
          headingRef = useRef(null),
          heading2Ref = useRef(null),
          iconRef = useRef([]),
          icon2Ref = useRef([]);

    const fadeIn = element =>{
        const tl = new TimelineLite();
        tl.to(element, .5, {
            opacity: 1,
            transform: 'rotate(45deg)',
        }).to(element,.4,{
            transform: 'rotate(-45deg)'
        }).to(element,.4,{
            transform: 'rotate(0)'
        })
    }

    const fadeHeader = element =>{
        TweenMax.to(element, .8, {
            opacity: 1,
            transform: 'rotateX(0)'
        })
    }

    useEffect(()=>{
        fadeInAnimation(sectionRef.current, fadeHeader, headingRef.current);
        fadeInAnimation(sectionRef.current, fadeIn, iconRef.current);
        fadeInAnimation(section2Ref.current, fadeIn, icon2Ref.current);
        fadeInAnimation(section2Ref.current, fadeHeader, heading2Ref.current);
    })

    return(

        <SectionWrapper 
        id="skills"
        margin
        ref={sectionRef}
        >
        <HeaderSection>Skills</HeaderSection>
        <Heading 
        margin 
        ref={headingRef} 
        trans
        >
            Main technologies
        </Heading>
            <Technologies ref={section2Ref}>
                {
                    mainIcons.map(({link, altText})=> 
                        <Icon 
                        src={link} 
                        alt={altText}
                        key={altText}
                        ref={ref => iconRef.current.push(ref)}
                        />
                    )
                }
            </Technologies>
            <Heading 
            secret 
            trans 
            margin 
            ref={heading2Ref}
            >
                Basic technology
            </Heading>
            <Technologies>
                {
                    basicIcons.map(({link, altText})=> 
                        <Icon big 
                        src={link} 
                        alt={altText}
                        key={altText}
                        ref={ref => icon2Ref.current.push(ref)}
                        />
                    )
                }
            </Technologies>
        </SectionWrapper>
    )
}

export default Skills;