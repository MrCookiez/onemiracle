import { css } from 'styled-components';
import images from '../../assets/images/cards';


const styledCardContainer = css`
    max-width: 350px;
    background: url(${images[0]}) 50% no-repeat;
    font-weight: bold;
    background-size: cover;
    padding: 20px 0;
    border: 10px solid rgba(48,48,48,0.5);;
    transition: all .6s;
    color: #fff;
    img {
        width: 100%;
    }


    :hover {
        cursor: pointer;
        background: url(${images[2]}) 100% no-repeat;
        background-size: cover;
        border: 10px solid rgba(48,48,48,0.5);
        -webkit-box-shadow: 10px 10px 14px -11px rgba(255,255,255,.5);
        -moz-box-shadow: 10px 10px 14px -11px rgba(255,255,255,.5);
        box-shadow: 10px 10px 14px -11px rgba(255,255,255,.5);
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
    
    @media(max-width: 768px){
        display: none;
    }
`;

export default { styledCardContainer, styledCardBlock, styledTitle, styledCardDesc };
