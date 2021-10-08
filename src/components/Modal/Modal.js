import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalEsc);
  }

  closeModalEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModalOverlay = ({ target }) => {
    if (target.nodeName !== 'IMG') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.closeModalOverlay}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
