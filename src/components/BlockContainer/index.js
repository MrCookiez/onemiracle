import React from 'react';
import styled from 'styled-components';
import BlockLeft from '../BlockLeft';
import BlockRight from '../BlockRight';
import Card from '../Card';
import * as styles from './styles';
import * as images from '../../assets/images/logos/';

const BlockContainer = ({ data }) => (
    <div>
    { data.map((item, index )=> {
            return (
                <div>
                    { item.type === "card" &&<Card key={index} cardImg={item.cardImg} cardTitle={item.cardTitle} cardText={item.cardText} cardLink={item.cardLink} /> }
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
