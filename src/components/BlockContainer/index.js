import React from 'react';
import styled from 'styled-components';
import BlockLeft from '../BlockLeft';
import BlockRight from '../BlockRight';
import * as styles from './styles';

const BlockContainer = ({ data }) => (
    <div>
    { data.map(item => {
            return (
                item.type === "left" ? 
                <BlockLeft heading={item.heading} paragraph={item.paragraph} techLogo={item.techLogo} />
                : <BlockRight heading={item.heading} paragraph={item.paragraph} techLogo={item.techLogo} /> 
                
            )  
        } 
        )
    }
    </div>
);

export default BlockContainer;
