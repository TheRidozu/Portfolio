import styled from 'styled-components';


const Parag = styled.p`
    font-size: 1.8rem;
    opacity: ${props => props.secret? 0 : 1};
    position: relative;
    top: ${props => props.top? '150px' : 0};
    text-align: center;
    margin: ${props => props.margin? "3rem 0": 0};
    transform: ${props => props.trans? 'rotateX(90deg)': 'rotateX(0)'};
    @media(min-width: 375px){
        &{
            font-size: 2.3rem;
        }
    }
    @media(min-width: 500px){
        &{
            font-size: 3rem;
        }
    }
    @media(min-width: 568px) and (orientation: landscape){
        &{
            font-size: 2.3rem;
        }
    }
    @media(min-width: 667px) and (orientation: landscape){
        &{
            font-size: 2.9rem;
        }
    }
    
`

export default Parag;