import React from 'react';
import { style } from 'typestyle';
import { HashRouter } from 'react-router-dom';
import Content from './Content';

/*
  Overview on react strap: https://reactstrap.github.io/
  Components: https://reactstrap.github.io/components/
*/

/* We don't need externally provided Props, so we set the props part to {} */
/* But, we want to type our local state with the IState definition */
class App extends React.Component {

  public render() {

    return (
      <HashRouter>
        <Content />
      </HashRouter >
    )
  }
}


export default App;
