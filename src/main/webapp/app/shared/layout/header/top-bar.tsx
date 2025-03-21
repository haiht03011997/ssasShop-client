import React from 'react';
import './top-bar.scss';
const TopBarComponent = () => {
  return (
    <div className="top-bar d-flex gap-3 justify-content-center align-items-center py-2">
      <div>CHÀO MỪNG BẠN TRỞ LẠI WEBSITE</div>
      <div>
        <span className="action question">CÂU HỎI THƯỜNG GẶP</span>
      </div>
      <div>
        <span className="action introduction">HƯỚNG DẪN MUA HÀNG</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <span>HOTLINE: +84987243301</span>
        <img alt="facebook" src="/content/images/facebook-small.svg" />
        <img alt="mail google" src="/content/images/mail-google-small.svg" />
        <img alt="skype" src="/content/images/skype-small.svg" />
        <img />
      </div>
    </div>
  );
};
export default TopBarComponent;
