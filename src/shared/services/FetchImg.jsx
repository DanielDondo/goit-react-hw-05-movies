import axios from 'axios';

const KEY = '6df93cfea9ab79c894afa14efbfcc5c8';

const FetchImg = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${KEY}&language=en-US`
  );
  console.log('fetchId', data);
  return data;
};

export default FetchImg;
