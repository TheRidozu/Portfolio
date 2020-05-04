import styled from 'styled-components';


const Icon = styled.img`
    height: 5rem;
    width: 5rem;
    opacity: 0;
    @media(min-width: 375px){
        height: 6rem;
        width: 6rem;
    }
    @media(min-width: 1000px){
        height: 8.5rem;
        width: 8.5rem;
    }
    @media(min-width: 568px) and (orientation: landscape){
        height: 6rem;
        width: 6rem;
    }
    @media(min-width: 800px){
        height: 8rem;
        width: 8rem;
    }
`
export default Icon;