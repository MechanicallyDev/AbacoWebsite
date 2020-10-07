/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import VideoItem from '../components/VideoItem'
import Videos from '../videolist';

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <section
        style={{ marginTop: '64px', marginBottom: '-2px', background: '#000' }}
      >
        <div className="row" style={{ marginRight: '0', marginLeft: '0' }}>
        {
        Videos.map((video, index)=>{return <VideoItem key={index} url={video}/>})}
        
          
          {/*<div className="col-xl-4 col-sm-12 col-md-6 col-lg-4" style={{padding: '0'}}>
            <div className="video-container" style={{margin: '0'}}>
              <iframe
                allowfullscreen=""
                frameborder="0"
                src="https://www.youtube.com/embed/vYFbAanSdr4?loop=1&amp;playlist=vYFbAanSdr4"
                width="853"
                height="480"
              />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4" style={{padding: '0'}}>
            <div className="video-container" style={{margin: '0'}}>
              <iframe
                allowfullscreen=""
                frameborder="0"
                src="https://www.youtube.com/embed/C9DMnZU01vo?loop=1&amp;playlist=C9DMnZU01vo"
                width="853"
                height="480"
              />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4" style={{padding: 0}}>
            <div className="video-container" style={{margin: 0}}>
              <iframe
                allowfullscreen=""
                frameborder="0"
                src="https://www.youtube.com/embed/95lJaXNOmWc?loop=1&amp;playlist=95lJaXNOmWc"
                width="853"
                height="480"
              />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4" style={{padding: 0}}>
            <div className="video-container" style={{margin: 0}}>
              <iframe
                allowfullscreen=""
                frameborder="0"
                src="https://www.youtube.com/embed/ddaxeWrkuHs?loop=1&amp;playlist=ddaxeWrkuHs"
                width="853"
                height="480"
              />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4" style={{padding: 0}}>
            <div className="video-container" style={{margin: 0}}>
              <iframe
                allowfullscreen=""
                frameborder="0"
                src="https://www.youtube.com/embed/ruvEFfq1rBA?loop=1&amp;playlist=ruvEFfq1rBA"
                width="853"
                height="480"
              />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4" style={{padding: 0}}>
            <div className="video-container" style={{margin: 0}}>
              <iframe
                allowfullscreen=""
                frameborder="0"
                src="https://www.youtube.com/embed/mhYMTd1ZMGA?loop=1&amp;playlist=mhYMTd1ZMGA"
                width="853"
                height="480"
              />
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4" style={{padding: 0}}>
            <div className="video-container" style={{margin: 0}}>
              <iframe
                allowfullscreen=""
                frameborder="0"
                src="https://www.youtube.com/embed/0aKWaizZ5tc?loop=1&amp;playlist=0aKWaizZ5tc"
                width="853"
                height="480"
              />
            </div>
  </div>
  */}
        </div>
      </section>
      <Footer />
    </>
  );
}
