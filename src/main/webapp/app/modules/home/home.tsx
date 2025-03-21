import './home.scss';

import React from 'react';
import { Col, Row } from 'reactstrap';
import { useAppSelector } from 'app/config/store';
import CustomCarousel from '../carousel';
import FeatureRight from './feature-right';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <div className="d-flex gap-2 p-2 home">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <CustomCarousel />
      </div>
      <div className="col-md-2">
        <FeatureRight />
      </div>
    </div>
  );
};

export default Home;
