import React from 'react';
import styled from 'styled-components';
import BlockLeft from '../BlockLeft';
import BlockRight from '../BlockRight';
import * as styles from './styles';
import * as images from '../../assets/images/logos/';

const BlockContainer = ({ data }) => (
    <div>
    { data.map((item, index )=> {
            return (
                <div>
                    {}
                    { item.type === "left" && <BlockLeft key={index} id={item.id} heading={item.heading} paragraph={item.paragraph} techLogo={item.techLogo}  to={item.to} /> }
                    { item.type === "right" && <BlockRight key={index} id={item.id} heading={item.heading} paragraph={item.paragraph} techLogo={item.techLogo} to={item.to} /> }
                </div>
            )  
        } 
        )
    }
    </div>
);

export default BlockContainer;
