import React from 'react';

interface IProps {
  size: number;
  onSizeChanged: (size: number) => void;
}

export default class SizePicker extends React.Component<IProps> {
  sizes: number[];
  constructor(props: IProps) {
    super(props);
    this.sizes = [25, 50, 100];
  }

  public render() {
    return <>
      <select onChange={e => this.props.onSizeChanged(parseInt(e.target.value))}>
        {this.sizes.map(size => {
          return <option key={size} value={size}>{size}</option>
        })}
      </select>
    </>;
  }
}