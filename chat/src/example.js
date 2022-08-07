import React from "react";

export const reactElement = (
  <div>
    <h3>App </h3>
  </div>
);

const FilmsList = ({ films, title, handleClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      {films.map((film) => {
        return (
          <div>
            <h3>{film.title}</h3>
            <h3>{film.year}</h3>
            <button onClick={handleClick}>Click me</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export const FunctionComponent = ({ age, films, handleClick }) => {
  return (
    <div>
      <h2>Function Component</h2>
      <h4>{age}</h4>
      <button onClick={handleClick}>Click me</button>
      <FilmsList
        films={films}
        handleClick={handleClick}
        title="function Films"
      />
      {reactElement}
    </div>
  );
};

export class ClassComponent extends React.Component {
  render() {
    const { age, films, handleClick } = this.props;

    return (
      <div>
        <h2>Class Component</h2>

        <h4>{age}</h4>

        <FilmsList
          films={films}
          handleClick={handleClick}
          title="class Films"
        />

        {reactElement}
      </div>
    );
  }
}
