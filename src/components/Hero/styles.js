import { css } from 'styled-components';
import mountains from '../../assets/images/blue-mountains.svg';

const stylesHero = css`
    background: url(${mountains});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 550px;
    -webkit-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    -moz-box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    box-shadow: inset 0px 30px 224px 23px rgba(0,0,0,0.52);
    
    @media(max-width: 800px){
        height: 420px;
    }
    @media(max-width: 420px){
        height: 220px;
    }
`;

const styledContainer = css`
    background-color: #F6F7F7;
`;

export { stylesHero, styledContainer };