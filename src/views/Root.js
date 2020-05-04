import React, {useEffect} from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import styled from 'styled-components';
// Sections
import Header from '../sections/Header/Header';
import Home from '../sections/Home/Home';
import AboutMe from '../sections/AboutMe/AboutMe';
import Skills from '../sections/Skills/Skills';
import WhatILike from '../sections/WhatILike/WhatILike';
import Projects from '../sections/Projects/Projects';
import Contact from '../sections/Contact/Contact';
import MyInspiration from '../sections/MyInspiration/MyInspiration'; 
// Icons
import suit from '../assets/icons/suit.png';
import instagram from '../assets/icons/instagram2.svg';
import github from '../assets/icons/github.svg';
import linkeding from '../assets/icons/linkedin.svg';
import messenger from '../assets/icons/msg.svg';



const contactIcons = [
    {
        link: messenger,
        alt: "Messenger",
        description: "Hubert Krzyszczyk"
    },
    {
        link: instagram,
        alt: "Instagram",
        description: "@po_prostu_bercik"
    },
    {
        link: github,
        alt: "Github",
        description: "Hubert Krzyszczyk"
    },
    {
        link: linkeding,
        alt: "LinkedIn",
        description: "Hubert Krzyszczyk"
    }
];


const Root = () =>(

    <>
        <GlobalStyle/>
        <Header
            logo="TheRidozu"
        />
        <Home
            heading="Hi there, I'm Ridozu"
            description="Welcome in my virtual world!"
            swipe="Swipe up"
            suitImage={suit}
        />
        <main>
        <AboutMe/>
        <MyInspiration/>
        <WhatILike/>
        <Skills/>
        <Projects/>
        <Contact
            contactIcons={contactIcons}
        />
    </main>
    </>
);

export default Root;

