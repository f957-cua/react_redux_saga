import { SET_LATEST_NEWS, SET_POPULAR_NEWS } from "../constans";

const initiaState = {
  latestNews: [],
  popularNews: [],
};

const news = (state = initiaState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS:
      return { ...state, latestNews: payload};
    case SET_POPULAR_NEWS:
      return { ...state, popularNews: payload};
    default:
      return state;
  }
};

export default news;
