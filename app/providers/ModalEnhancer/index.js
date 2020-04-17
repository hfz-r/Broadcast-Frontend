/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { equals } from 'ramda';
import { actions, selectors } from 'stores';

const mapDispatchToProps = dispatch => ({
  close: compose(
    dispatch,
    actions.modals.closeModal,
  ),
  closeAll: compose(
    dispatch,
    actions.modals.closeAllModals,
  ),
  replace: compose(
    dispatch,
    actions.modals.replaceModal,
  ),
  update: compose(
    dispatch,
    actions.modals.updateModalOptions,
  ),
});

const mapStateToProps = state => ({
  modals: selectors.modals.getModals(state),
});

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default (type, options = {}) => Component =>
  enhance(function Modal(props) {
    const { modals, ...rest } = props;
    const filtered = modals.filter(m => m.type === type);
    const modalRef = useRef(null);

    const handleClick = e => {
      const modalContainer = modalRef.current;
      if (
        modalContainer &&
        !props.disableOutsideClose &&
        equals(modalContainer.children[0], e.target)
      ) {
        props.close();
      }
    };

    const onKeyPressed = evt => {
      const event = evt || window.event;
      if (event.keyCode === 27 && !options.preventEscapeClose) {
        props.close();
      }
    };

    return filtered.length ? (
      <div>
        {filtered.map((modal, i) => (
          <div
            key={`${type}:${i + 10}`}
            onKeyDown={onKeyPressed}
            onMouseDown={handleClick}
            ref={modalRef}
            tabIndex="0"
          >
            <Component
              position={modals.indexOf(modal) + 1}
              total={modals.length}
              {...modal.options}
              {...modal.props}
              {...rest}
            />
          </div>
        ))}
      </div>
    ) : null;
  });
