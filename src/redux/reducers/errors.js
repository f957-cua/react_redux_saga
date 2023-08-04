import { SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR } from "../constans";

const initiaState = {
  latestNews: "",
  popularNews: "",
};

const errors = (state = initiaState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS_ERROR:
      return { ...state, latestNews: payload };
    case SET_POPULAR_NEWS_ERROR:
      return { ...state, popularNews: payload };
    default:
      return state;
  }
};

export default errors;
