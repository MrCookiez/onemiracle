import { css } from 'styled-components';
import mountains from '../../assets/images/blue-mountains.svg';

const stylesHero = css`
    background: 
        linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
        ),
        url(${mountains});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 550px;
    
    -webkit-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    -moz-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    div > span { 
        margin-top: 0; 
        text-transform: uppercase;
        color: #fafafa;
        font-size: 20px;
        font-weight: bold;
        display: block;
    }

    div > span > span {
        font-size: 40px;
        display: block;
    }

    @media(max-width: 800px){
        height: 400px;
        div > span > span {
            font-size: 20px;
        }
        div > span {
            font-size: 16px;
        }
    }
    @media(max-width: 420px){
        height: 210px;
        div > span {
            font-size: 12px;
        }
    }
`;

const stylesButton = css`
    background-color: yellow;
    color: black;
`;

const stylesSubTitle = css`
    font-size: 24px;
    display: block;
`;

export { stylesHero, stylesSubTitle, stylesButton };