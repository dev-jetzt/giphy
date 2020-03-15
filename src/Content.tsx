import React, { ChangeEvent } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';

interface IState {
}

class Content extends React.Component<{}, IState> {

  public state: IState = {
  }

  public loadGif = (term: string) => {

    // use search term in url
    axios.get('http://api.giphy.com/v1/gifs/search?q=family%20guy&apikey=68DTW2NErhz3KAVjlCR4qaCcVCRojv9Q').then((response) => {

      const data = response.data;
      // investigate the result with the developer tools or console.log

      // extract on of the image ids

      // construct a url with
      // const gifUrl = `https://media.giphy.com/media/THE_IMAGE_ID/source.gif`;

      // display it via <img src>
    });
  }

  public handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    // on every input character
  }

  public handleClick = () => {
    // or on click
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
                <Button onClick={this.handleClick}>Search</Button>
              </div>
            </Col>
          </Row>
        </Container >
      </>
    )
  }
}

export default Content;