function posterImg(size, path) {
  let poster2 = `https://image.tmdb.org/t/p/${size}${path}`;
  return poster2;
}
function backdrop(size, path) {
  let backdropImg = `https://image.tmdb.org/t/p/${size}${path}`;
  return backdropImg;
}
function profileImg(size, path) {
  let profileImg2 = `https://image.tmdb.org/t/p/${size}${path}`;
  return profileImg2;
}
function votePercentage(vote) {
  const votingPercentage = vote / 10 * 100;
  let Integer = votingPercentage.toFixed(0);
  return Integer;
}
function getColor(vote) {
  let dynamicDegree = Number(votePercentage(vote)) / 100 * 360;
  if (Number(votePercentage(vote)) >= 75) {
    return `conic-gradient(rgb(0, 250, 87) ${dynamicDegree}deg , rgb(0, 250, 87 , .5)0deg)`;
  } else if (Number(votePercentage(vote)) >= 50) {
    return `conic-gradient(hsla(44, 100%, 49%, 1) ${dynamicDegree}deg  , hsla(44, 100%, 49%, .5)0deg)`;
  } else {
    return `conic-gradient(rgb(250, 0, 0) ${dynamicDegree}deg , rgba(250, 0, 0, 0.5)0deg)`;
  }
}
function splitDate(date) {
  if (typeof date !== "string" || !date) {
    return void 0;
  }
  let year = date.split("-")[0];
  return year;
}

export { posterImg as a, backdrop as b, getColor as g, profileImg as p, splitDate as s, votePercentage as v };
