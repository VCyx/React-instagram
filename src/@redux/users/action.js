import {
  LOAD_CARD_REQUEST,
  LOAD_CARD_SUCCESS,
} from './type'

export const getRequest = () => {
  return {type: LOAD_CARD_REQUEST, payload: true}
};

export const getCardSuccess = data => {
  return {type: LOAD_CARD_SUCCESS, payload: data}
};
