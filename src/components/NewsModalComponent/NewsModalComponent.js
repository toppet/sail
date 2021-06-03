import './NewsModalComponent.scss';
import "react-multi-carousel/lib/styles.css";

import React from 'react';
import moment from 'moment';
import { useState, useRef, useLayoutEffect } from 'react';

import LogoComponent from '../common/LogoComponent/LogoComponent.js';

import Carousel from "react-multi-carousel";
import { getOriginalIndexLookupTableByClones } from "react-multi-carousel/lib/utils/clones";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookF} from "@fortawesome/free-brands-svg-icons";

const imageCarauselResponsiveOptions = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const articleCarauselResponsiveOptions = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const imageCaraouselData = [
  '/crew-members/1.jpg',
  '/crew-members/2.jpg',
  '/crew-members/3.jpg'
]

const articlesData = [
  {
    imageSrc: '/crew-members/1.jpg',
    title: "HEADLINE VON EINEM  ÄLTEREN ARTIKEL" ,
    text: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
  },
  {
    imageSrc: '/crew-members/2.jpg',
    title: "HEADLINE VON EINEM  ÄLTEREN ARTIKEL" ,
    text: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
  },
  {
    imageSrc: '/crew-members/3.jpg',
    title: "HEADLINE VON EINEM  ÄLTEREN ARTIKEL" ,
    text: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
  },
  {
    imageSrc: '/crew-members/4.jpg',
    title: "HEADLINE VON EINEM  ÄLTEREN ARTIKEL" ,
    text: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
  },
  {
    imageSrc: '/crew-members/5.jpg',
    title: "HEADLINE VON EINEM  ÄLTEREN ARTIKEL" ,
    text: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
  },
];

// Hook
function useLockBodyScroll(newsPopUpVisibility) {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if(!newsPopUpVisibility) {
      document.body.style.overflow = "visible";
    } else {
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
    }
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [newsPopUpVisibility]);
}

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group">
       <button onClick={() => previous()} className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"></button>
       <button onClick={() => next()} className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"></button>
    </div>
  );
};

function NewsModalComponent({ newsPopUpVisibility, onCloseButtonClick }) {
  const [currentImageSlideIndex, setCurrentImageSlideIndex] = useState(1);
  const dektopRef = useRef();
  const mobileRef = useRef();
  useLockBodyScroll(newsPopUpVisibility);

  if(!newsPopUpVisibility) {
    return null;
  }

  const handleAfterChange = (referenceToCarousel) => {
    const table = getOriginalIndexLookupTableByClones(referenceToCarousel.current.state.slidesToShow, React.Children.toArray(referenceToCarousel.current.props.children));
    const realIndex = table[referenceToCarousel.current.state.currentSlide];

    setCurrentImageSlideIndex(realIndex + 1);
  };

  const getCarouselImages = () => {
    return imageCaraouselData.map(image => <div key={image} className="image-carousel__image" style={{ background: `url(${image}) no-repeat center center`, backgroundSize: "cover" }}></div>);
  };

  const getArticles = () => {
    
    const articleItems = articlesData.map((article,index) => {
      return (
        <div key={index} className="carousel-article">
          <div className="article-image" style={{ background: `url(${article.imageSrc}) no-repeat center center`, backgroundSize: "cover" }}></div>
          <h4>{article.title}</h4>
          <p>{article.text}</p>
        </div>
      )
    });

    return articleItems;
  }
  
  return (
    <div className="news-modal">
      <div className="news__content">

        <div className="new__content-buttons">
          <LogoComponent />

          <div className="buttons">
            <button className="buttons__close" onClick={onCloseButtonClick}>
              <span></span>
              <span></span>
            </button>
            <button className="buttons__facebook">
              <FontAwesomeIcon icon={faFacebookF} className="brand-icons__icon" />
            </button>
            <button className="buttons__twitter">
              <FontAwesomeIcon icon={faTwitter} className="brand-icons__icon" />
            </button>
          </div>
        </div>

        <div className="news__col-left">
          <span className="news__date"><FontAwesomeIcon icon={faCalendarAlt} className="news__icon" />{moment('2021-10-25').format("ll")}</span>
          <h3 className="news__title">NEWSARTIKEL HEADLINE</h3>
          <p className="news__subtitle">LOREM IPSUM PROIN GRAVIDA NIBH VEL VELIT</p>
          <hr />
          <div className="news__image-carousel news__image-carousel--mobile">
            <Carousel
              ref={mobileRef}
              responsive={imageCarauselResponsiveOptions}
              swipeable={false}
              draggable={false}
              infinite={true}
              containerClass="image-carousel-container"
              afterChange={() => handleAfterChange(mobileRef)}
            >
              { getCarouselImages() }
            </Carousel>
            <span className="carousel-status">{currentImageSlideIndex} / {imageCaraouselData.length}</span>
          </div>
          <div className="news__text">
            <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. </p>
            <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
          </div>
        </div>

        <div className="news__col-right">
          <div className="news__image-carousel news__image-carousel--desktop">
            <Carousel
              ref={dektopRef}
              responsive={imageCarauselResponsiveOptions}
              swipeable={false}
              draggable={false}
              infinite={true}
              containerClass="image-carousel-container"
              afterChange={() => handleAfterChange(dektopRef)}
            >
              { getCarouselImages() }
            </Carousel>
            <span className="carousel-status">{currentImageSlideIndex} / {imageCaraouselData.length}</span>
          </div>
          <div className="news__text">
            <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostr.</p>
          </div>
        </div>

      </div>
      <div className="news__article-carousel">
        <h3>ÄLTERE ARTIKEL</h3>
        <div className="news__articles-carousel-container">
          <Carousel 
            responsive={articleCarauselResponsiveOptions}
            swipeable={false}
            draggable={false}
            infinite={true}
            containerClass="article-carousel-container"
            itemClass="article-carousel-item"
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            arrows={false}
          >
            { getArticles() }
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default NewsModalComponent;