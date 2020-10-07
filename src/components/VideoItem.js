import React from 'react';

export default function VideoItem({url}) {
  return (
    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4" style={{ padding: '0' }}>
      <div className="video-container" style={{ margin: '0' }}>
        <iframe
          title={url.id}
          allowfullscreen=""
          frameborder="0"
          src={url}
          width="853"
          height="480"
        />
      </div>
    </div>
  );
}
