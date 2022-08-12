import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { span: 0 };
  }

  //   function getRandomSize(min, max) {
  //     return Math.round(Math.random() * (max - min) + min);
  //   }
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({ span: span });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  render() {
    const { alt_decription: alt, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} alt={alt} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
