import styled from 'styled-components';
const HeaderSection = styled.h3`
        font-size: 2rem;
        color: #707070;
        text-align: left;
        width: 100%;
        height: 12%;
        display: flex;
        align-items: center;
        padding: 2.4rem 0 2.4rem 2.4rem;
        /* portrait */
        @media(min-width: 375px){
            &{
                font-size: 3rem;
            }
        }
        @media(min-width: 500px){
            &{font-size: 4rem; margin: 3rem 0 3rem 3rem; padding: 0;}
        }
        /* landscape */
        @media(min-width: 568px) and (orientation: landscape){
            &{
                font-size: 2.9rem;
            }
        }
        @media(min-width: 667px) and (orientation: landscape){
            &{
                font-size: 3.5rem;
            }
        }
`;

export default HeaderSection;