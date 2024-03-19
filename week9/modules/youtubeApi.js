const getYoutubeList = async (search) => {
  const result = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=KR&relevanceLanguage=ko&maxResults=10&order=viewCount&q=${search} 여행 브이로그&type=video&key=key`
  );
  return result.data.items;
};

export default getYoutubeList;
