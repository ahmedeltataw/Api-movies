async function fetchApi(url) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${url}`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzkzYmYxYzZiZTFhNTg5OTA4NmM3MTlkY2ZmNGM5MCIsIm5iZiI6MTczMTM3NDE5OS41Mjc1MjA3LCJzdWIiOiI2NTFmNzYzMGYwNGQwMTAwZmZlZTNiNjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vGXoSLmhwKT6wmxZmI5wSaVtHfVnjkD19JD37qFKWKo"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw `check api please to fix this error:${err}`;
  }
}

export { fetchApi as f };
