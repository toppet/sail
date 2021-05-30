import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faNewspaper } from '@fortawesome/free-regular-svg-icons';

import "./News.scss";

function NewsItem(props) {
  return (
    <div className="news-item">
      <span className="news-item__date"><FontAwesomeIcon icon={faCalendarAlt} className="news-item__icon" />{moment(props.date).format("ll")}</span>
      <h3 className="news-item__title">{props.title}</h3>
      <p className="news-item__description">{props.description}</p>
    </div>
  )
}

function NewsComponent() {

  const getNewsItems = () => {
    const todaysDate = new Date().getTime();
    const newsData = [
      {
        date: todaysDate,
        title: "News Headline",
        description: "Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean sollicitudin... quis bibendum auctor.",
      },
      {
        date: todaysDate,
        title: "News Headline",
        description: "Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean sollicitudin... quis bibendum auctor.",
      },
    ];

    const newsItems = newsData.map((news, index) =>
      <NewsItem
        key={index}
        date={news.date}
        title={news.title}
        description={news.description}
      />
    );

    return newsItems;
  };

  return (
    <section className="news">

      <div className="col-left segment-h2-v3">
        {getNewsItems()}
        <div className="image-4x4"></div>
      </div>

      <div className="col-right segment-h2-v3">
        <div className="competition">
          <div className="competition__date">{moment('2020-05-17').format('DD MMM')}</div>
          <div className="competition__title">HEADLINE BEITRAG 2021</div>
          <div className="competition__subtitle">SUBTITLE</div>
          <div className="competition__desc">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. nisi elit consequat ipsum, nec sagittis sem nibh id elit. </div>
        </div>
        <div className="competition">
          <div className="competition__date">{moment('2020-10-03').format('DD MMM')}</div>
          <div className="competition__title">HEADLINE BEITRAG 2021</div>
          <div className="competition__subtitle">SUBTITLE - ORT - JAHR</div>
          <div className="competition__desc">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. nisi elit consequat ipsum, nec sagittis sem nibh id elit. </div>
        </div>
        <div className="image-1x1"></div>
        <div className="image-1x1"></div>
      </div>

      <div className="col-left segment-h2-v1">
        <div className="news-bilder">
          <FontAwesomeIcon icon={faNewspaper} className="h3__icon" />
          <h3>NEWS+<br />BILDER</h3>
        </div>
      </div>

      <div className="col-right segment-h2-v1">
        <div className="termin">
          <FontAwesomeIcon icon={faCalendarAlt} className="h3__icon" />
          <h3>SelgelTeam<br />Termine 2021</h3>
        </div>
      </div>

    </section>
  )
}

export default NewsComponent;