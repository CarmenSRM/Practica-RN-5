const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=6d751624b2660ff997c1b5a092592c81&format=json'

const imageurl = "https://api.deezer.com/search?q=";

function getData() {
  return fetch(`${URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.topartists.artist)
    .then((artists) =>
      artists.map((artist) => {
        return {
          id: artist.mbid,
          name: artist.name,
          image: artist.image[0]["#text"],
          listeners: artist.listeners,
          streamable: artist.streamable,
        };
      })
    );
}

const getImage = (nameArtist, setStateImage) => {
  return fetch(`${imageurl}${encodeURIComponent(nameArtist)}`)
    .then((response) => response.json())
    .then((data) => data.data[0].artist["picture_medium"])
    .then((image) => setStateImage(image));
};

export { getData, getImage };
