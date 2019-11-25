export const searchShowEndPoint = q => {
  return "http://api.tvmaze.com/search/shows?q=" + q;
};

export const ShowByIdEndPoint = q => {
  return "http://api.tvmaze.com/shows/" + q;
};

export const showCastEndPoint = q => {
  return "http://api.tvmaze.com/shows/" + q + "/cast";
};

export const getSeasonsEndPoint = q => {
  return "http://api.tvmaze.com/shows/" + q + "/seasons";
};

export const getEpisodesEndPoint = q => {
  return "http://api.tvmaze.com/shows/" + q + "?embed=episodes";
};
