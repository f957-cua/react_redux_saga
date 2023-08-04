import {
  GET_LATEST_NEWS,
  SET_LATEST_NEWS,
  SET_LATEST_NEWS_ERROR,
  GET_POPULAR_NEWS,
  SET_POPULAR_NEWS,
  SET_POPULAR_NEWS_ERROR,
} from "../constans.js";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setLatestNewsError = (payload) => ({
  type: SET_LATEST_NEWS_ERROR,
  payload,
});

export const setPopularNewsError = (payload) => ({
  type: SET_POPULAR_NEWS_ERROR,
  payload,
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});

export const getPopularNews = () => ({
  type: GET_POPULAR_NEWS,
});
