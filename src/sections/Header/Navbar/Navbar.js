import React, { useRef} from 'react';
import { TweenMax } from 'gsap/all';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.ul`
    top: 10vh;
    left: 0;
    position: fixed;
    height: 90%;
    width: 100%;
    background: white;
    flex-direction: column;
    transition: display 5s 5s ease;
    overflow-y: hidden;
    opacity: .9;
    @media(min-width: 568px) and (orientation: landscape){
        &{
            top: 17.5vh;
        }
    }
    @media(min-width: 850px){
        &{
            top: 10vh;
        }
    }
    
`;

const List = styled.ul`
    height: 80%;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;   
    font-family: "Montserrat", sans-serif;
    .navElement{
        border:none;
        color: grey;
        background: transparent;
        cursor: pointer;
        font-size: 3.8rem;
        transition: color .5s ease;
    }

    .navElement:hover{
        color: black;
        text-shadow: 1px 0px 1px black;
    }
    .active{
        color: black;
        text-shadow: 1px 0px 1px black;
    }
    @media(min-width: 568px) and (orientation: landscape){
        &{
            height: 70%;
            .navElement{
                font-size: 3rem;
            }
        }
    }
    @media(min-width: 850px){
        &{
            height: 80%;
            .navElement{
                font-size: 3.8rem;
            }
        }
    }
`;

const Icons = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    img{
        width: 6.5rem;
        height: 6.5rem;
    }
    @media(min-width: 568px) and (orientation: landscape){
        &{
            align-items: center;
            img{
                width: 5rem;
                height: 5rem;
            }
        }
    }
    @media(min-width: 850px){
        &{
            align-items: flex-start;
            img{
                width: 6.5rem;
                height: 6.5rem;
            }
        }
    }
`;

const Navbar = ({isOpen, icons, navigation, switchButton, navHeight}) =>{

    const nav = useRef(null);


        

        isOpen? TweenMax.to(nav.current, .6, {
            display: 'flex',
            opacity: .9,
        }): TweenMax.to(nav.current, .6, {
            display: 'none',
            opacity: 0,
        })
    return(
        <>
            <Nav open={isOpen} ref={nav} >
            <List  className="nav">
                {
                    navigation.map(({ name, aim, noOffset }) =>(
                        <li key={name}>
                            <Link 
                            className="navElement"
                            to={aim}
                            smooth={true}
                            duration={500}
                            offset={noOffset? 0:-navHeight}
                            spy={true}
                            activeClass="active"
                            onClick={switchButton}>
                                {name}
                            </Link>
                        </li>
                    ))
                }
            </List>
            <Icons>
                {
                    icons.map( ({icon, link, altText }) =>(
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={altText} 
                        href={link}>
                            <img src={icon} alt={altText}/>
                        </a>
                    ))
                }
            </Icons>
        </Nav>
        </>
    )
}

export default Navbar;