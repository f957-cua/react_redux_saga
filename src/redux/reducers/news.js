import { SET_LATEST_NEWS } from "../constans";

const initiaState = {
  latestNews: [],
};

const news = (state = initiaState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS:
      return { ...state, latestNews: [...state.latestNews, payload] };
    default:
      return state;
  }
};

export default news;
