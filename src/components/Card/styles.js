import { css } from 'styled-components';
import images from '../../assets/images/cards';

console.log('TEST');
const styledCardContainer = css`
    max-width: 350px;
    background: url(${images[1]}) 50% no-repeat;
    font-weight: bold;
    background-size: cover;
    padding: 20px 0;
    border: 10px solid rgba(48,48,48,0.5);;
    transition: ease-in .6s;
    color: #fff;
    -webkit-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    -moz-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);

    img {
        width: 100%;
    }

    :hover {
        cursor: pointer;
        background: url(${images[2]}) 100% no-repeat;
        background-size: cover;
        border: 10px solid rgba(48,48,48,0.5);
    }
`;

const styledCardBlock = css`
    border-radius: 3px;
    background-color: rgba(0,0,0,0.5);
    margin: 120px 25px 10px;
    padding: 5px 10px;

    @media(max-width: 768px){
        margin: 5px 0;
        padding: 5px;
    }
`;

const styledTitle = css`
    font-size: 34px;
    margin: 32px 10px;
    background: #fff;
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    @media(max-width: 768px){
        font-size: 24px;
        margin: 10px;  
    }
`;

const styledCardDesc = css`
    letter-spacing: 2px;
    text-align: left;
    @media(max-width: 768px){
        display: none;
    }
`;

const styledLink = css`
    color: #fff;
    transition-timing-function: ease;
    :hover {
        color: #29A1CB;
    }
    :after {
        content: '';
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;
        width: 6px;
        height: 6px;
        border-top: 2px solid #006699;
        border-right: 2px solid #006699;
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    
    @media(max-width: 768px){
        display: none;
    }
`;

export default { styledCardContainer, styledCardBlock, styledTitle, styledCardDesc, styledLink };
