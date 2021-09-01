import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                {/* Render definitions / synonyms when they can be provided by the API */}
                <b>{def.definition}</b>
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
