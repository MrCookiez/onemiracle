
import { css } from 'styled-components';

const styledBlockLeft = css`
    background-color: rgba(41, 162, 204, 0.99);
    margin: 0 auto;
    padding: 80px 0;
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
    @media(max-width: 680px){
        width: 100%;
    }
`;

const styledTechLogo = css`
    float: left;
    margin-right: 20px;
`;
const stylesImg = css`
    width: 100%;
    max-width: 200px;
    @media(max-width: 680px){
        max-width: 100px
    }
`;

const styledHeading = css`
    padding-bottom: 20px;
    border-bottom: solid 2px rgba(0,34,68,0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const styledParagraph = css`
    padding: 10px 0;
    text-align: justify;
    letter-spacing: 1px;
    line-height: 1.1;
`;

export { styledBlockLeft, styledSubContainer, stylesText, styledHeading, styledParagraph, styledTechLogo, stylesImg };
