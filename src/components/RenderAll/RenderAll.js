import Card from "../Card";
import React from "react";

const renderAll = props => (
  <div className="row" id="testRow">
    {props.array.map((currVal, index) => {
      return (
        <div key={currVal.name} className="col-xs-12 col-sm-6 col-md-4">
          <Card
            deployed={currVal.deployed}
            gitHub={currVal.gitHub}
            thumbnail={currVal.thumbnail}
            name={currVal.name}
            video={currVal.video}
            description={currVal.description}
            changeFocus={props.changeFocus}
            technologies={currVal.technologies}
            featured={currVal.featured}
          />
        </div>
      );
    })}
  </div>
);

export default renderAll;
