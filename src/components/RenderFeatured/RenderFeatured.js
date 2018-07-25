import Card from "../Card";
import React from "react";
const renderFetured = props => (
  <div className="row">
    {props.array.map((currVal, index) => {
      if (currVal.featured) {
        return (
          <div key={currVal.name} className="col-xs-12 col-sm-6 col-md-4">
            <Card
              deployed={currVal.deployed}
              gitHub={currVal.gitHub}
              thumbnail={currVal.thumbnail}
              name={currVal.name}
            />
          </div>
        );
      }
    })}
  </div>
);
export default renderFetured;