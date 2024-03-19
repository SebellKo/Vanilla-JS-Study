const createVideoItem = (src, title, channel, description) => {
  return `<li>
      <iframe
        id="youtubePlayer"
        type="text/html"
        width="320"
        height="180"
        src='https://www.youtube.com/embed/${src}'
      ></iframe>
      <div class="video_detail">
        <h2>${title}</h2>
        <h4>${channel}</h4>
        <p>
          ${description}
        </p>
      </div>
    </li>`;
};

export default createVideoItem;
