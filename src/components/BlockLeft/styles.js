
import { css } from 'styled-components';

const styledBlockLeft = css`
    background-color: rgba(41, 162, 204, 0.99);
    margin: 0 auto;
    padding: 40px 0;
    color: rgba(0,34,68, 1);;
    h3 { color: rgba(0,34,68,0.5); }
    width: 100%; 
`;

const styledSubContainer = css`
    width: 60%;
    text-align: left;
    margin: auto;
    display: flex;
    width: 60%;
    @media(max-width: 680px){
        display: block;
    }
`;

const stylesText = css`
    width: 70%;
    margin: 0 20px;
    @media(max-width: 680px){
        width: 100%;
    }
`;

const styledHeading = css`
    padding-bottom: 20px;
    border-bottom: solid 2px rgba(0,34,68,0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    @media(max-width: 680px){
        text-align: center;
    }
`;

const styledParagraph = css`
    padding: 10px 0;
    letter-spacing: 1px;
    line-height: 1.1;
`;

const styledNavLink = css`
    text-align: left;
    display: block;
    color: rgba(0,34,68,0.5);
    :after {
        content: '';
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;
        width: 6px;
        height: 6px;
        border-top: 2px solid rgba(0,34,68,0.5);
        border-right: 2px solid rgba(0,34,68,0.5);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    :hover {
        color: rgba(0,34,68,0.8);
    }
    @media(max-width: 680px){
        text-align: center;
        margin: 20px;
    }
`;

const styledTechLogo = css`
    margin: 60px 0;
    width: 30%;
    @media(max-width: 680px){
        width: 100%;
        margin: auto;
        text-align: center;
    }
`;

const stylesImg = css`
    width: 100%;
    max-width: 200px;
    @media(max-width: 680px){
        max-width: 120px
    }
`;

export { styledBlockLeft, styledSubContainer, stylesText, styledHeading, styledParagraph, styledNavLink, styledTechLogo, stylesImg };
