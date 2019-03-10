import { css } from 'styled-components';
import mountains from '../../assets/images/blue-mountains.svg';

const stylesHero = css`
    background: url(${mountains});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 550px;
    line-height: 550px;
    -webkit-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    -moz-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    
    h1 { 
        margin-top: 0; 
        text-transform: uppercase;
        color: #fafafa;
        background-color: rgba(0,0,0,0.5);
    }

    @media(max-width: 800px){
        line-height: 220px;
        height: 220px;
        h1 {
            font-size: 20px;
        }
    }
    @media(max-width: 420px){
        line-height: 220px;
        height: 150px;
        h1 {
            font-size: 16px;
        }
    }
`;

const stylesButton = css`
    background-color: yellow;
    color: black;
`;

export { stylesHero, stylesButton };