import React from "react";
import { Jumbotron, Button } from 'reactstrap';

const Title = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4"> NASA Picture Of The Day </h1>
        <h2>{props.title}</h2>
      </Jumbotron>
    </div>
  );
};


export default Title;
