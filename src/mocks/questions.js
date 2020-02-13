const ARTIST_PICTURE_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        artist: `John Snow`,
        picture: `${ARTIST_PICTURE_URL}/${Math.random()}`,
      },
      {
        artist: `Ozzy Osbourne`,
        picture: `${ARTIST_PICTURE_URL}/${Math.random()}`,
      },
      {
        artist: `Jim Beam`,
        picture: `${ARTIST_PICTURE_URL}/${Math.random()}`,
      }
    ],
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `blues`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `jazz`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      }
    ],
  },
];

