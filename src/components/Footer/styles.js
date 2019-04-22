import { css } from 'styled-components';
import bgImgFooter from '../../assets/images/footer/bgfooter.svg';

const styledContainer = css`
    padding: 50px 40px;
    color: #fff;
    background: linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.2));
    background-size: cover;
    margin: auto;
    text-align: center;
    h4 {
        letter-spacing: 10px;
    }
`;

const styledSubContainer = css`
    display: flex;
    justify-content: center;
    padding: 40px 20px;
`;

const styledDivider = css`
    border: none;
    height: 12px;
    max-width: 75%;
    background-color: rgba(0,0,0,0.4);
`;

const styledColumn = css`
    margin: 10px 20px;
`;

const styledCredits = css`
    margin-top: 45px;

    div {
        margin: 20px auto;
    }
`;

const styledSocialMedia = css`
    margin: 10px;
    padding: 5px;
    max-width: 60px;

    @media(max-width: 768px){
        margin: 5px;
        padding: 2px;
    }
`;

export default { styledContainer, styledSubContainer, styledDivider, styledColumn, styledCredits, styledSocialMedia };