const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export const API = {
  fetchNewsIds: () =>
    fetch(`${BASE_URL}topstories.json`).then(response => response.json()),
  fetchNewsItem: (id: string) =>
    fetch(`${BASE_URL}item/${id}.json`).then(response => response.json()),
  fetchAuthor: (id: string) =>
    fetch(`${BASE_URL}user/${id}.json`).then(response => response.json()),
};
