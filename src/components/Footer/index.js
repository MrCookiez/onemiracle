import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import { Button } from 'reactstrap';

const Footer = () => (
    <section>
       <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4">COLUMN 1</div>
       <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4">COLUMN 2</div>
       <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4">COLUMN 3</div>
       <Button color="danger" />
    </section>
);

export default Footer;

