import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ id, title, routeName, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItem }) => (
            <CollectionItem key={id} {...otherItem} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
