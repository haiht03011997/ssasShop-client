import React from 'react';
import './home.scss';

const FeatureRight = () => {
  return (
    <div className="feature-right d-flex flex-column gap-3 pt-1">
      <img className="rounded" loading="lazy" src="/content/images/spotify.webp" />
      <img className="rounded" loading="lazy" src="/content/images/netflix.webp" />
      <img className="rounded" loading="lazy" src="/content/images/youtube.webp" />
    </div>
  );
};
export default FeatureRight;
