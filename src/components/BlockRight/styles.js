
import { css } from 'styled-components';

const styledBlockRight = css`
    background-color: rgba(0, 34, 68, 0.8);
    margin: 0 auto;
    padding: 40px 0;
    color: white;
    width: 100%;
`;

const styledSubContainer = css`
    width: 60%;
    margin: auto;
    display: flex;
    width: 60%;
    @media(max-width: 680px){
        display: block;
    }
`;

const stylesText = css`
    width: 70%;
    @media(max-width: 680px){
        width: 100%;
    }
`;

const styledHeading = css`
    text-align: right;
    padding-bottom: 20px;
    border-bottom: solid 2px rgba(255, 181, 48, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    @media(max-width: 680px){
        text-align: center;
    }
`;

const styledParagraph = css`
    text-align: left;
    letter-spacing: 1px;
    line-height: 1.1;
`;

const styledNavLink = css`
    text-align: right;
    display: block;
    :after {
        content: '';
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;
        width: 6px;
        height: 6px;
        border-top: 2px solid #FFB530;
        border-right: 2px solid #FFB530;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    :hover {
        color: #FFB530;
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
        max-width: 120px;
    }
`;

export { styledBlockRight, styledSubContainer, stylesText, styledHeading, styledParagraph, styledNavLink, styledTechLogo, stylesImg };
