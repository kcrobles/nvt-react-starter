import React from 'react';

const Movie = props => {
  const { movies } = props;
  return (
    <div>
      <h1>This is MovieApp</h1>
      {movies && <ul>Titles:</ul>}
      {movies &&
        movies.map(m => <li key={m.id}>{m.title + ' - ' + m.year}</li>)}
    </div>
  );
};

export default Movie;
