import styled, {css} from 'styled-components';
import background from '../../assets/background-medium.jpg';

const bgImg = `
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    margin: 0;
`;


const Wrapper = styled.section`
    margin: 10vh 0;
    background: ${props => props.whiteBg? 'white': 'linear-gradient(to right, #000000, #434343)'};
    color: grey;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    flex-direction: ${props => props.column? 'column': 'row'};
    justify-content: center;
    align-items: center;
    ${props => props.bgImg ? css`${bgImg}` : ''}
    @media(min-width: 568px) and (orientation: landscape){
        &{
            min-height: ${props => props.minHeight? '177.5vh' : 0};
            margin: 17.5vh 0;
            ${props => props.bgImg ? css`${bgImg}` : ''};
        }
    }
    @media(min-width: 850px){
        &{
            min-height: 0;
        }
    }
`
export default Wrapper;
