import moment from 'moment';
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './NewsOverlay.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

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

function NewsOverlayComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="news-overlay">
      <div className="news__content">


        <div className="news__col-left">
          <span className="news__date"><FontAwesomeIcon icon={faCalendarAlt} className="news__icon" />{moment('2021-10-25').format("ll")}</span>
          <h3 className="news__title">NEWSARTIKEL HEADLINE</h3>
          <p className="news__subtitle">LOREM IPSUM PROIN GRAVIDA NIBH VEL VELIT</p>
          <hr />
          <div className="news__text">
            <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. </p>
            <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
          </div>
        </div>

        <div className="news__col-right">

          <div className="news__image-carousel">
          <Carousel 
            responsive={imageCarauselResponsiveOptions}
            swipeable={false}
            draggable={false}
            infinite={true}
            containerClass="image-carousel-container"
          >
            <div className="image-carousel__image" style={{ background: `url('/crew-members/1.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
            <div className="image-carousel__image" style={{ background: `url('/crew-members/2.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
            <div className="image-carousel__image" style={{ background: `url('/crew-members/3.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
          </Carousel>
          </div>

          <div className="news__text">
            <h3>{index + 1} / 3</h3>
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
          >
            <div className="carousel-article">
              <div className="article-image" style={{ background: `url('/crew-members/1.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
              <h4>HEADLINE VON EINEM  ÄLTEREN ARTIKEL</h4>
              <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
            <div className="carousel-article">
              <div className="article-image" style={{ background: `url('/crew-members/1.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
              <h4>HEADLINE VON EINEM  ÄLTEREN ARTIKEL</h4>
              <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
            <div className="carousel-article">
              <div className="article-image" style={{ background: `url('/crew-members/1.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
              <h4>HEADLINE VON EINEM  ÄLTEREN ARTIKEL</h4>
              <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
            <div className="carousel-article">
              <div className="article-image" style={{ background: `url('/crew-members/1.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
              <h4>HEADLINE VON EINEM  ÄLTEREN ARTIKEL</h4>
              <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
            <div className="carousel-article">
              <div className="article-image" style={{ background: `url('/crew-members/1.jpg') no-repeat center center`, backgroundSize: "cover" }}></div>
              <h4>HEADLINE VON EINEM  ÄLTEREN ARTIKEL</h4>
              <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
            </div>
           
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default NewsOverlayComponent;