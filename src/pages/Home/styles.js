import { css } from 'styled-components';

const styledCodeContainer = css`
    max-width: 600px;
    display: block;
    background: rgba(0,0,0,0.8);
    border-radius: 4px;
    border: solid 1px lightgreen;
    color: lightgreen;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
    margin: auto;
    padding: 12px;
    text-align: left;
`;

const cardRow = css`
    margin:  0 auto 80px ;
    display: inline-grid;
    grid-template-columns: 350px auto 50px;
    

    @media(max-width: 768px){
        grid-template-columns: auto;
        margin: 10px 10px;
    }
`;

export { styledCodeContainer, cardRow }
