import { InfoCircleOutlined, MessageOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Col, Collapse, Image, Rate, Row, Table, Tabs, Typography } from 'antd';
import React, { useEffect } from 'react';
import ProductDescription from './description/product-description';
import ProductRage from './rate/product-rate';
import './style.scss';
import { Helmet } from 'react-helmet-async';

const { Title, Text } = Typography;

const ProductDetailPage = () => {
  const [expand, collapse] = React.useState(false);

  const handleExpandContent = () => {
    collapse(!expand);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const items = [
    {
      key: '1',
      label: 'Mô tả',
      children: <ProductDescription expand={expand} handleExpandContent={handleExpandContent} />,
    },
    { key: '2', label: 'Đánh giá', children: <ProductRage /> },
  ];

  const data = [
    { key: '1', label: 'Tính năng', value: 'Giải trí, xem phim' },
    { key: '2', label: 'Gói đăng ký', value: 'Cấp sẵn 1 User' },
    { key: '3', label: 'Hạn gói', value: '4 Ngày' },
    { key: '4', label: 'Bảo hành', value: 'Trọn gói' },
    { key: '5', label: 'Hỗ trợ', value: 'Tất cả các thiết bị' },
    { key: '6', label: 'Cho phép', value: '1 Thiết bị cùng lúc' },
  ];

  const columns = [
    { dataIndex: 'label', key: 'label', className: 'label-column' },
    { dataIndex: 'value', key: 'value', className: 'value-column' },
  ];

  return (
    <>
      <Helmet>
        <title>Netflix Premium Việt Nam 4K Full HD 1User 4 Ngày</title>
      </Helmet>
      <div className="product-detail-container d-flex flex-column gap-3">
        <div className="product-card">
          <Row gutter={16}>
            <Col span={10}>
              <Badge.Ribbon text={`Giảm -${46}%`} color="red" placement="start">
                <Image src="/content/images/netflix.webp" alt="Netflix Premium" className="product-image" />
              </Badge.Ribbon>
            </Col>
            <Col span={14} className="d-flex flex-column gap-3">
              <Title level={3}>Netflix Premium Việt Nam 4K Full HD 1User 4 Ngày</Title>
              <div className="d-flex gap-2">
                <Rate allowHalf defaultValue={4.5} />
                <Text type="secondary"> 2 đánh giá | Đã bán 1.5k</Text>
              </div>
              <div className="d-flex gap-2">
                <Text delete>35.000đ</Text>
                <span className="text-danger">19.000đ</span>
              </div>
              <Row className="d-flex justify-content-between" gutter={16}>
                <Col md={12}>
                  <Button size="large" className="primary w-100" icon={<ShoppingCartOutlined />}>
                    Thêm Giỏ Hàng
                  </Button>
                </Col>
                <Col md={12}>
                  <Button size="large" className="primary w-100">
                    Mua Ngay
                  </Button>
                </Col>
              </Row>
              <Button size="large" className="warning w-100" icon={<MessageOutlined />}>
                Liên Hệ Hỗ Trợ
              </Button>
            </Col>
          </Row>
        </div>

        {/* Product Description */}
        <Card title="Lưu Ý Sản Phẩm">
          <ul>
            <li>Tài khoản có thể dùng cho nhiều User, nhưng chỉ được 1 User đăng nhập cùng lúc.</li>
            <li>...</li>
          </ul>
        </Card>

        <Row className="w-100 card-content">
          <Col md={16} className="description-rate-card">
            <Tabs type="card" defaultActiveKey="1" items={items} />
          </Col>
          <Col md={1} />
          <Col md={7}>
            <Card className="product-info-card">
              <h4 className="font-weight-bold">
                <InfoCircleOutlined /> Thông Tin Sản Phẩm
              </h4>
              <Table dataSource={data} columns={columns} pagination={false} showHeader={false} rowClassName={() => 'table-row'} />
            </Card>
          </Col>
        </Row>

        {/* Similar Products */}
        <Title level={4} className="section-title">
          Sản phẩm tương tự
        </Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card hoverable cover={<img src="#" alt="" className="similar-product-image" />}>
              <Title level={5}>Gói Tài Khoản VieON 12 Tháng</Title>
              <Button className="primary">Mua Ngay</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable cover={<img src="#" alt="" className="similar-product-image" />}>
              <Title level={5}>Gói Tài Khoản Galaxy Play</Title>
              <Button className="primary">Mua Ngay</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetailPage;
