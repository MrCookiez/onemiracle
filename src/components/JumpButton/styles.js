import { css } from 'styled-components';

const stylesButton = css`
    i {
        font-size: 20px;
        color: rgba(0,0,0,0.5);
    }

    display: block;
    width: 50px;
    height: 50px;
    border: 0px;
    border-radius: 50%;
    background: rgba(204,169,44, 0.8);
    cursor: pointer;
    box-shadow: 0 0 0 rgba(204,169,44, 0.7);
    animation: pulse 2s infinite;

    :hover {
    animation: none;
    }

    @-webkit-keyframes pulse {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.7);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
    }
    @keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.7);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0.7);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
    }
`;

export default { stylesButton };