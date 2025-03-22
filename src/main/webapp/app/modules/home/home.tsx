import './home.scss';

import { useAppSelector } from 'app/config/store';
import VerticalMenu from 'app/shared/layout/sidebar/customer/vertical/vertical-menu';
import React from 'react';
import CustomCarousel from '../carousel';
import FeatureRight from './feature-right';
import FlashSale from 'app/shared/component/flash-sale/flash-sale';
import NetflixComponent from '../netflix';
import YoutubeComponent from '../youtube';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Trang Chủ - My Demo website</title>
      </Helmet>
      <div className="d-flex gap-1 py-2 home">
        <div className="col-md-2">
          <VerticalMenu />
        </div>
        <div className="col-md-7">
          <CustomCarousel />
        </div>
        <div className="col-md-3">
          <FeatureRight />
        </div>
      </div>
      <div className="p-2 d-flex gap-4 flex-column">
        <FlashSale />
        <NetflixComponent />
        <YoutubeComponent />
      </div>
    </>
  );
};

export default Home;
