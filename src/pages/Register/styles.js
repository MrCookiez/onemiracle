import { css } from 'styled-components';

export const image = css`
    max-width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width: 768px){
        max-width: 50%;
        margin-top: 50px;
    }
`;

export const form = css`
    border: 3px solid #00668833;
    padding: 30px 15px;
    margin: 20px;
    background-color: #fafafa99;
`;
