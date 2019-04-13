import React from 'react';
import styled from 'styled-components';
import styles from './styles';
import { facebook, youtube, instagram } from '../../assets/images/social-media';

const Container = styled.div`
    ${styles.styledContainer};
`;

const SubContainer = styled.div`
    ${styles.styledSubContainer};
`;

const Column = styled.div`
    ${styles.styledColumn};
`;

const Divider = styled.hr`
   ${styles.styledDivider};
`;

const SocialMedia = styled.img`
    ${styles.styledSocialMedia};
`;

const Credits = styled.div`
    ${styles.styledCredits}
`;

const Footer = () => (        
    <Container>
        <h4>FIND US</h4>
        <Divider />
        <SubContainer>
            <Column>
                <a href="#">Facebook
                    <SocialMedia src={facebook} alt="fb" />
                </a>
            </Column>
            <Column>
                <a href="#">Youtube
                    <SocialMedia src={youtube} alt="Yb" />
                </a>
            </Column>
            <Column>
                <a href="#">Instagram
                    <SocialMedia src={instagram} alt="Insta" />
                </a>
            </Column>
        </SubContainer>
        <Divider />
        <Credits>
            <div>All rights reserved | onemiracle.gr 2019 | © </div>
            <div>Designed & Developed by <a href="http://teovragkos.com">Theodoros Vragkos</a></div>
        </Credits>
    </Container>    
);

export default Footer;

