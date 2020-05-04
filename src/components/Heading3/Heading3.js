import styled from 'styled-components';

const Heading3 = styled.h3`
    margin: 1.5rem 0;
    color: ${props => props.white? '#D4C9C9': 'black'};
    font-size: 2.2rem;
    text-align: center;
    opacity: ${props => props.secret? 0 : 1};
    transform: ${props => props.trans?'rotateX(-90deg)' : 'rotateX(0)'};
    @media(min-width: 750px){
        font-size: 2.5rem;
    }
    @media(min-width: 568px) and (orientation: landscape){
        font-size: 2.2rem;
    }
`;

export default Heading3;