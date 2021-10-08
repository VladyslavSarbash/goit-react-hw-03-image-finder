import { Component } from 'react';
import FetchAPI from '../API/API';
import LoaderCircle from '../Loader/Loader';

export default class ButtonLoadMore extends Component {
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
