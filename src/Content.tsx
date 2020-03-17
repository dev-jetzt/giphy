import React, { ChangeEvent } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';

import SizePicker from './SizePicker';

// Giphy endpoint documentation: https://developers.giphy.com/docs/api/endpoint#search

// 1. Fix the following code, so that one image can be displayed
// 2. Display all 25 images
// 3. Create component to select the number of images to display and modify endpoint accordingly
// 4. Create a component to load more images (e.g. pagination)


interface IState {
  search: string;
  imgUrls: string[];
  size: number;
  currentOffset: number;
}

class Content extends React.Component<{}, IState> {

  public state: IState = {
    search: '',
    imgUrls: [],
    size: 25,
    currentOffset: 0
  }

  public loadGif = (term: string, limit: number, offset: number) => {

    // GET, POST, PUT, DELETE

    // use search term in url
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(term)}&apikey=68DTW1NErhz3KAVjlCR4qaCcVCRojv9Q&limit=${limit}&offset=${offset}`).then((response) => {

      const data = response.data;
      // investigate the result with the developer tools or console.log

      // extract on of the image ids

      // construct a url with
      // const gifUrl = ;

      // display it via <img src>
      this.setState({
        imgUrls: this.state.imgUrls.concat(data.data.map((img: any) => {
          return `https://media.giphy.com/media/${img.id}/200w_d.gif`
        }))
      });
    });
  }

  public handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: evt.target.value
    });
  }

  public handleClick = () => {
    this.setState({
      imgUrls: []
    }, () => {
      this.loadGif(this.state.search, this.state.size, this.state.currentOffset);
    });
  }

  private onSizeChanged = (size: number) => {
    this.setState({
      size: size
    });
  }

  private loadMore = () => {
    this.setState({
      currentOffset: this.state.currentOffset + this.state.size
    }, () => {
      this.loadGif(this.state.search, this.state.size, this.state.currentOffset + this.state.size);
    });

  }

  public render() {

    return (
      <>
        {/* fluid makes bootstrap use all screen with */}
        {/* h-100 is a bootstrap default to use all height */}
        <Container fluid className="h-100">
          {/* h-100 is a bootstrap default to use all height */}
          <Row className="h-100">

            {/* auto instructs bootstrap to take the remaining column space */}
            <Col xl="auto">
              <div>
                <input type="text" onChange={this.handleChange}></input>
                <SizePicker size={this.state.size} onSizeChanged={this.onSizeChanged}></SizePicker>
                <Button onClick={this.handleClick}>Search</Button>
              </div>
            </Col>
          </Row>
          {this.state.imgUrls.map((imgUrl) => {
            return <img key={imgUrl} src={imgUrl} alt={imgUrl} />;
          })}
          <Button onClick={this.loadMore}>Load more</Button>
        </Container >
      </>
    )
  }
}

export default Content;