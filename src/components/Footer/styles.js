import { css } from 'styled-components';
import bgImgFooter from '../../assets/images/footer/bgfooter.svg';

const styledContainer = css`
    padding: 50px 40px;
    color: #fff;
    background: linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.2)), url(${bgImgFooter}) no-repeat;
    background-size: cover;
    margin: auto;
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

export default { styledContainer, styledSubContainer, styledDivider, styledColumn, styledCredits };