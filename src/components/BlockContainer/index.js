import React from 'react';
import styled from 'styled-components';
import BlockLeft from '../BlockLeft';
import BlockRight from '../BlockRight';
import Card from '../Card';
import * as styles from './styles';
import images from '../../assets/images/logos/';
import cardImages from '../../assets/images/cards/';

const BlockContainer = ({ data }) => (
        <div>
        { data.map((item, index )=> {
                return (
                    <div>
                        { item.type === "left" && <BlockLeft key={index} id={item.id} heading={item.heading} paragraph={item.paragraph} techLogo={images[item.id]}  to={item.to} /> }
                        { item.type === "right" && <BlockRight key={index} id={item.id} heading={item.heading} paragraph={item.paragraph} techLogo={images[item.id]} to={item.to} /> } */}
                    </div>
                )  
            } 
            )
        }
        </div>
);

export default BlockContainer;
