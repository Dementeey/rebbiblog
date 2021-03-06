/**
 * @flow
 * Post - component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import getDateRu from '../../../helpers/getDateRu';
import './style.module.css';

export default class Post extends Component {
  componentDidMount() {
    const { getPost, match } = this.props;

    getPost(match.params.id);
  }

  renderPost = () => {
    const { data } = this.props;
    const currentData = data.filter(
      el => el.postId === this.props.match.params.id
    );

    return (
      <div className="post">
        <header>
          <h1 className="post__title">{currentData[0].title}</h1>
          <p>{getDateRu(currentData[0].createdAt)}</p>
        </header>

        <section>{currentData[0].description}</section>
      </div>
    );
  };

  render() {
    const { loading } = this.props;
    return (
      <>
        <Loader loading={loading} />
        {!!this.props.data.length && this.renderPost()}
      </>
    );
  }
}

Post.propTypes = {
  data: PropTypes.array,
  match: PropTypes.object,
  getPost: PropTypes.func,
  loading: PropTypes.bool,
};
