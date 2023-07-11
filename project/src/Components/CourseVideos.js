
import React, { useState } from 'react';
import './CourseVideos.css';
import Navbar from './Navbar';
import ScrollButton from './ScrollButton';
import Footer from './Footer';

export const CourseVideos = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const handleVideoClick = (index, src, text) => {
    setActiveVideo(index);
    const mainVideo = document.querySelector('.main-video video');
    const title = document.querySelector('.main-video .title');
    mainVideo.src = src;
    title.innerHTML = text;
  };

  return (
    <>
      <Navbar />
      <h3 className='heading'>Video Gallery</h3>
      <div className='container-fluid vdContainer'>
        <div className='main-video'>
          <div className='video'>
            <video src='./Videos/video1.mp4' controls muted autoPlay></video>
            <h3 className='title'>0.1. Video title goes here</h3>
          </div>
        </div>

        <div className='video-list'>
          <div
            className={`vid ${activeVideo === 0 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                0,
                './Videos/video1.mp4',
                '0.1. Video title goes here'
              )
            }
          >
            <video src='./Videos/video1.mp4' muted></video>
            <h3 className='title'>0.1. Video title goes here</h3>
          </div>

          <div
            className={`vid ${activeVideo === 1 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                1,
                './Videos/video2.mp4',
                '0.2. Video title goes here'
              )
            }
          >
            <video src='./Videos/video2.mp4' muted></video>
            <h3 className='title'>0.2. Video title goes here</h3>
          </div>

          <div
            className={`vid ${activeVideo === 2 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                2,
                './Videos/video3.mp4',
                '0.3. Video title goes here'
              )
            }
          >
            <video src='./Videos/video3.mp4' muted></video>
            <h3 className='title'>0.3. Video title goes here</h3>
          </div>

          <div
            className={`vid ${activeVideo === 3 ? 'active' : ''}`}
            onClick={() =>
              handleVideoClick(
                3,
                './Videos/video4.mp4',
                '0.4. Video title goes here'
              )
            }
          >
            <video src='./Videos/video4.mp4' muted></video>
            <h3 className='title'>0.4. Video title goes here</h3>
          </div>
        </div>
      </div>

      <ScrollButton />
      <Footer />
    </>
  );
};
