import React from "react";
import Shop_data from "./shop.data.js";
import PreviewCollection from "../../Components/preview-collection/preview-collection.component.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_data,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ ...otherCollectionProps }) => (
          <PreviewCollection {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
