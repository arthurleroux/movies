import React from 'react';
import './App.css';
import movies from './movies';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies
    };
  }

  like(id) {
    let movies = this.state.movies;
    let index = movies.findIndex(movie => movie.id === id);
    movies[index].likes += 1;
    this.setState({movies});
  }

  dislike(id) {
    let movies = this.state.movies;
    let index = movies.findIndex(movie => movie.id === id);
    movies[index].dislikes += 1;
    this.setState({movies});
  }

  remove(id) {
    let movies = this.state.movies;
    let index = movies.findIndex(movie => movie.id === id);
    movies.splice(index, 1);
    this.setState(movies)
  }

  render() {
    return (
        <div className={"cards-container"}>
          {this.state.movies.map( movie => (
              <div className="movie-card" key={movie.id}>
                <div className={"title"}>{movie.title}</div>
                <div>Likes : {movie.likes}</div>
                <div>Dislikes : {movie.dislikes}</div>
                <button onClick={() => this.like(movie.id)}>Like</button>
                <button onClick={() => this.dislike(movie.id)}>Dislike</button>
                <button className={"delete-btn"} onClick={() => this.remove(movie.id)}>X</button>
              </div>
          ))}
        </div>
    )
  }
}

export default App;
