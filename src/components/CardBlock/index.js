import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const CardBlock = ({data}) => (
    data.map((item, index) => {
        return (
            <Card>
                { item.type === 'card' && <Card cardTitle={item.cardTitle} to={item.to} /> }
            </Card>
       )
   })
);

export default CardBlock;
