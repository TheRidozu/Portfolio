import styled from 'styled-components';

const Heading = styled.h2`
    width: 80%;
    font-size: 2.6rem;
    text-align: center;
    background: transparent;
    opacity: ${props => props.secret? 0 : 1};
    margin: ${props => props.margin? "4rem 0": 0};
    transform: ${props => props.trans? 'rotateX(90deg)':  'rotateX(0)'};
    @media(min-width: 375px){
        &{font-size: 3rem;}
    }
    @media(min-width: 500px){
        &{
            font-size: 4rem;
            margin: ${props => props.margin? "7rem 0": 0};
        }
        
    }

    @media(min-width: 568px) and (orientation: landscape){
            &{
                font-size: 3rem;
                margin: 0;
                margin: ${props => props.margin? "3.5rem": 0};
                padding: 0;
            }
    }
    @media(min-width: 667px) and (orientation: landscape){
            &{
                font-size: 3.6rem;
            }
    }

`

export default Heading;