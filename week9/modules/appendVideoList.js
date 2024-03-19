import createVideoItem from './createVideoItem.js';

const appendVideoList = (list, container) => {
  container.replaceChildren();
  const listHTML = list.reduce((acc, cur) => {
    const videoDetail = cur.snippet;
    acc += createVideoItem(
      cur.id.videoId,
      videoDetail.title,
      videoDetail.channelTitle,
      videoDetail.description
    );
    return acc;
  }, ``);
  container.insertAdjacentHTML('afterbegin', listHTML);
};

export default appendVideoList;
