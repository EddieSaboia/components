import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import theme from 'App.theme.js';
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import createStyles from './Carousel.styles';

const Carousel = (props) => {
  const [visibleSlides, setVisibleSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidingAmount, setSlidingAmount] = useState(0);
  const [disableButton, setDisableButton] = useState('left');
  const [transition, setTransition] = useState('all 500ms ease-in-out');
  const [nextSlide, setNextSlide] = useState(0);

  const classes = createStyles(props);
  const slides = props.array.length;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const updateDimentions = () => {
      if (window.innerWidth > 1800) {
        setVisibleSlides(4);
      } else if (window.innerWidth > 1000) {
        setVisibleSlides(3);
      } else if (window.innerWidth > 700) {
        setVisibleSlides(2);
      } else if (window.innerWidth > 0) {
        setVisibleSlides(1);
      }
    };
    window.addEventListener('resize', updateDimentions);
    updateDimentions();
    return () => window.removeEventListener('resize', updateDimentions);
  }, []);

  useEffect(() => {
    if (slides - visibleSlides < 0) {
      setCurrentSlide(0);
    } else if (slides - nextSlide < visibleSlides) {
      setCurrentSlide(slides - visibleSlides);
    } else if (nextSlide < 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(nextSlide);
    }

    if (currentSlide === 0 && slides > visibleSlides) {
      setDisableButton('left');
    } else if (currentSlide === slides - visibleSlides && slides > visibleSlides) {
      setDisableButton('right');
    } else if (slides <= visibleSlides) {
      setDisableButton('left right');
    } else {
      setDisableButton('');
    }

    setSlidingAmount((currentSlide * 100) / slides);
  }, [slides, nextSlide, visibleSlides, currentSlide]);

  function handleStart() {
    setTransition('');
  }

  function handleStop(e, data) {
    if (data.x !== 0) {
      setTransition('all 500ms ease-in-out');
      let slidePercent = 100 / slides;
      let percentX;
      let trayWidth = (window.innerWidth * slides) / visibleSlides;
      if (data.x > 0) {
        percentX = (100 * data.x) / trayWidth - slidingAmount;
      } else {
        percentX = (100 * data.x) / trayWidth - slidingAmount - slidePercent;
      }

      let newSlide = Math.floor(-percentX / slidePercent);

      setNextSlide(newSlide);
    }
  }

  const renderDotIndicators = () => {
    let dotArray = [];

    const totalDots = slides - visibleSlides;

    for (let i = 0; i <= totalDots; i++) {
      dotArray.push(
        <div className={i === currentSlide ? `${classes.dotIndicator} ${classes.active}` : classes.dotIndicator}></div>
      );
    }
    return dotArray;
  };

  function handleScroll(e, data) {
    window.scrollTo(0, window.scrollY - data.y);
  }

  const goto = (link) => {
    window.open(link, '_self');
  };

  return (
    <div className={classes.carousel}>
      {!isMobile && slides > visibleSlides && (
        <div className={classes.buttonsContainer}>
          <div className={classes.buttonsContainerInner}>
            <button
              className={classes.button}
              onClick={() => setNextSlide(currentSlide - visibleSlides)}
              disabled={disableButton.includes('left') ? true : false}
            >
              <ChevronLeftIcon />
            </button>
            <button
              className={classes.button}
              onClick={() => setNextSlide(currentSlide + visibleSlides)}
              disabled={disableButton.includes('right') ? true : false}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      )}
      <div className={classes.container}>
        {props.title && (
          <Typography variant='h4' className={classes.title}>
            {props.title}
          </Typography>
        )}

        <Draggable
          axis='x'
          handle={`.${classes.tray}`}
          position={{ x: 0, y: 0 }}
          positionOffset={{ x: -slidingAmount + '%', y: 0 }}
          scale={1}
          onStart={handleStart}
          onDrag={handleScroll}
          onStop={handleStop}
        >
          <div
            className={classes.tray}
            style={{
              width: ((props.array.length / visibleSlides) * 100).toString() + '%',
              transition: transition
            }}
          >
            {props.array.map((item, index) => {
              return (
                // se precisar de onClick : onClick={() => { } }
                <div className={classes.slide} key={id}>
                  {/* 
                    copoment to carousel
                   */}
                </div>
              );
            })}
          </div>
        </Draggable>

        {isMobile && <div className={classes.dotIndicatorsContainer}>{renderDotIndicators()}</div>}

        {props.showAllBtn && props.array.size > 3 ? (
          <div className={classes.showAllBtn}>{props.showAllBtn}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;
