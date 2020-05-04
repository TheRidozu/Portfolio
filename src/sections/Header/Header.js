import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';

//Icons
import facebook from '../../assets/icons/facebook.svg';
import snapchat from '../../assets/icons/snapchat.svg';
import instagram from '../../assets/icons/instagram.svg';



const Wrapper = styled.nav`
    position: fixed;
    height: 10vh;
    z-index: 5;
    width: 100%;
    font-family: 'Comic Neue';
    font-weight: 700;
    background: white;
    @media(min-width: 568px) and (orientation: landscape){
        &{
            height: 17.5vh;
        }
    }
    @media(min-width: 850px){
        &{
            height: 10vh;
        }
    }
`;

const Logo = styled.div`
    height: 100%;
    width: 40%;
    h2{
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1.8rem;
        height: 100%;
        width: 100%;
        font-size: 1.8rem;
    }
    @media(min-width: 414px){
        font-size: 4rem;
    }
    @media(min-width: 568px) and (orientation: landscape){
        &{
            font-size: 1.8rem;
        }
    }
`;

const Hamburger = styled.button`
    display: block;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 4%;
    padding: 10px;
    border: none;
    overflow: hidden;
`;

const HamburgerBox = styled.span`
    width: 30px;
    height: 15px;
    display: inline-block;
    position: relative;

    span{
        width: 100%;
        height: 3px;
        background-color: grey;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);        background: ${props => props.open? 'transparent' : 'grey'};
        transition: background-color .1s .2s ease-in-out;
    }

    span::before,
    span::after{
        content: '';
        left: 0;
        width: 100%;
        height: 3px;
        background-color: grey;
        position: absolute;
        transition: transform .3s .3s ease;
    }

    span::before{
        top: -10px;
        transform: ${props => props.open? 'translateY(10px) rotate(45deg)': 'rotate(0)'};
    }

    span::after{
        top: 10px;
        transform: ${props => props.open? `
        translateY(-10px) rotate(-45deg)`: 'rotate(0)'}
    }
    @media(min-width: 375px){
        &{
            width: 35px;
            height: 24px;
        }
    }
`;


class Header extends React.Component{

    // Ikonki social media
    navIcons = [
        {
            icon: instagram,
            link: 'https://www.instagram.com/po_prostu_bercik/?hl=pl',
            altText: 'instagram'
        },
        {
            icon: facebook,
            link: 'https://www.facebook.com/hubert.krzyszczyk',
            altText: 'facebook'
        }, 
        {
            icon: snapchat,
            link: 'https://www.snapchat.com/',
            altText: 'snapchat'
        }
    ];
    // Tekst nawigacja
    navTab = [
        {   name: "Home",
            aim: "home",
            noOffset: 1
        },
        { 
            name: "Projects",
            aim: "projects"
        },
        { 
            name: "Skills",
            aim: "skills",
        },
        {
            name: "AboutMe",
            aim: "aboutMe",
        },
        {
            name: "Contact",
            aim: "contact",
        },
    ]

    componentDidMount(){
        this.getNavHeight();
        window.addEventListener('resize',this.getNavHeight);
    }

    state = {
        open: false,
        navHeight: 0,
    }

    changeState = () =>{
        if(this.state.open){
            this.setState({
                open: false
            })
        }else{
            this.setState({
                open: true
            })
        }
    }


    getNavHeight = () =>{
        const height = this.navigation.clientHeight;
        this.setState({
                navHeight: height
        })
    }

    



    render(props){
        return(
            <Wrapper 
            className="nav"
            ref={navigation => {this.navigation = navigation}}
            >
                <Logo>
                    <h2 className="xd">{this.props.logo}</h2> 
                </Logo>
                <Hamburger onClick={this.changeState}>
                    <HamburgerBox open={this.state.open} className="box">
                        <span></span>
                    </HamburgerBox>
                </Hamburger>
                <Navbar 
                isOpen={this.state.open} 
                icons={this.navIcons}
                navigation={this.navTab}
                switchButton={this.changeState}
                navHeight={this.state.navHeight}
                />
            </Wrapper>
        )
    }
}

export default Header;