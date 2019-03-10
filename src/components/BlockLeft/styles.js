
import { css } from 'styled-components';

const styledBlockLeft = css`
    background-color: rgba(0,0,0,0.5);
    margin: 0 auto;
    padding: 20px 0;
    color: white;
`;

const styledSubContainer = css`
    width: 60%;
    text-align: left;
    margin: auto;
`;

const styledTechLogo = css`
    float: left;
    margin-right: 20px;
`;

const styledHeading = css`
    padding-bottom: 20px;
    border-bottom: solid 2px rgba(255, 255, 255, 0.125);
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const styledParagraph = css`
    padding: 10px 0;
    text-align: justify;
    letter-spacing: 1px;
    line-height: 1.1;
`;

export { styledBlockLeft, styledSubContainer, styledTechLogo, styledHeading, styledParagraph };
