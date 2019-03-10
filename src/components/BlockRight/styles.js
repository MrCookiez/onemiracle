
import { css } from 'styled-components';

const styledBlockRight = css`
    background-color: rgba(0, 34, 68, 0.8);
    margin: 0 auto;
    padding: 80px 0;
    color: white;
    width: 100%;
`;

const styledSubContainer = css`
    text-align: right;
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
    padding-bottom: 20px;
    border-bottom: solid 2px rgba(255, 181, 48, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const styledParagraph = css`
    padding: 10px 0;
    text-align: justify;
    letter-spacing: 1px;
    line-height: 1.1;
`;

const styledTechLogo = css`
    margin-right: 20px;
    width: 30%;
    @media(max-width: 680px){
        width: 100%;
    }
`;

export { styledBlockRight, styledSubContainer, stylesText, styledHeading, styledParagraph, styledTechLogo };
