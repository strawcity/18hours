import React from 'react';

export default class SunSet extends React.Component {

  // static propTypes = {
  //    sunSetPosition: PropTypes.string,
  // };
  static defaultProps = {
    sunSetPosition: "",
    render: "",
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (this.props.sunSetPosition > 0) {
      console.log(this.props.sunSetPosition);
    }
  }

  componentWillReceiveProps(nextProps) {

  }
  
  render() {
    let sunSet;
    if (this.props.sunSetPosition > 0) {
      sunSet = (
        <span className="sunset-line" style={{ left: this.props.sunSetPosition }}/>
      )
    }

    return (
      <div>
        {sunSet}
      </div>

    );
  }
}
