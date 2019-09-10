import React from "react";

export default class WorshipPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <h2>{ entry.getIn(["data", "title"])}</h2>
      { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
      { widgetFor("body") }
    </div>;
  }
}
