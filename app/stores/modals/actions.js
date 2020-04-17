import * as T from './constants';

// Remove the last modal added in the stack
export const closeModal = () => ({ type: T.CLOSE_MODAL });

// Remove all the modals in the stack
export const closeAllModals = () => ({ type: T.CLOSE_ALL_MODALS });

// Add a modal in the stack
export const showModal = (type, props = {}, options = {}) => ({
  type: T.SHOW_MODAL,
  payload: { type, props, options },
});

// Replace the last modal added in the stack by this new one
export const replaceModal = (type, props = {}, options = {}) => ({
  type: T.REPLACE_MODAL,
  payload: { type, props, options },
});

// Update the last modal added in the stack
export const updateModalOptions = (options = {}) => ({
  type: T.UPDATE_MODAL,
  payload: { options },
});
