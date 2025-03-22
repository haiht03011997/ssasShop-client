import ProductPricing from 'app/modules/product/list/product';
import React from 'react';
import { products } from './config';
import { useNavigate } from 'react-router';

const NetflixComponent = () => {
  const navigate = useNavigate();

  // initialize sate
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleViewDetail = (slug: string) => {
    navigate(`chi-tiet/${slug}`);
  };

  const handleBuy = () => {
    console.error('a', 'View detail');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ProductPricing
      handleBuy={handleBuy}
      handleChangePage={handlePageChange}
      handleDetail={handleViewDetail}
      products={products}
      currentPage={currentPage}
      imgSrc="content/images/netflix.svg"
      title="Netflix giá rẻ"
    />
  );
};
export default NetflixComponent;
