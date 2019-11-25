export const searchShowEndPoint = q => {
  return "https://api.tvmaze.com/search/shows?q=" + q;
};

export const ShowByIdEndPoint = q => {
  return "https://api.tvmaze.com/shows/" + q;
};

export const showCastEndPoint = q => {
  return "https://api.tvmaze.com/shows/" + q + "/cast";
};

export const getSeasonsEndPoint = q => {
  return "https://api.tvmaze.com/shows/" + q + "/seasons";
};

export const getEpisodesEndPoint = q => {
  return "https://api.tvmaze.com/shows/" + q + "?embed=episodes";
};
