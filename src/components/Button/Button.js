import { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderCircle from '../Loader/Loader';
import FetchAPI from '../API/API';

export default class ButtonLoadMore extends Component {
  static propTypes = {
    searchInput: PropTypes.string,
    loadMore: PropTypes.func,
  };

  state = {
    page: 1,
    loader: false,
  };

  loadMoreBtn = () => {
    const { searchInput, loadMore } = this.props;
    const { page } = this.state;

    this.setState(({ loader }) => ({
      loader: !loader,
    }));

    FetchAPI(searchInput, page + 1)
      .then(data => loadMore(data.hits))
      .then(
        this.setState({
          page: page + 1,
        }),
      )
      .finally(
        this.setState(({ loader }) => ({
          loader: !loader,
        })),
      );
  };

  render() {
    const { loader } = this.state;
    if (loader) {
      return LoaderCircle();
    }

    if (!loader) {
      return (
        <div className="Btn_load-more">
          <button className="Button" type="button" onClick={this.loadMoreBtn}>
            Load more
          </button>
        </div>
      );
    }
  }
}
