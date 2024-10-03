import React from 'react';
import PropTypes from 'prop-types';
import * as articleApi from '../api/article';

class HomePage extends React.Component {
  static async getInitialProps() {
    let initialProps = {
      articles: [],
      statusCode: 200,
    };

    try {
      // Load all articles from the backend.
      // @ts-expect-error TS(2322): Type 'unknown' is not assignable to type '{ articl... Remove this comment to see the full error message
      initialProps = await articleApi.getAll();
    } catch (e) {
      // Pass status code as internal properly. It is being checked inside of
      // render() method of _app.js.
      initialProps.statusCode = 500;
    }

    return initialProps;
  }

  render() {
    // @ts-expect-error TS(2339): Property 'articles' does not exist on type 'Readon... Remove this comment to see the full error message
    const { articles } = this.props;
    return (
      <div>
        Home page is working!
        <br />
        <br />
        List of articles from Drupal:
        <br />
        <ul>
          {articles.map((article: any) => (
            <li key={article.id}>
              {article.title} (id: {article.id})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
HomePage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
HomePage.defaultProps = {
  articles: [],
};

export default HomePage;
