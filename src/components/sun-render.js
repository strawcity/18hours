import React from 'react';

export default class SunRender extends React.Component {

  static defaultProps = {
    sunRisePosition: "",
    sunSetPosition: "",
    nextSunRisePosition: "",
    nextSunSetPosition: "",
    nightLength: "",
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    let nightStart = this.props.sunSetPosition + 15;
    let sunRise,
        sunSet,
        nextSunRise,
        nextSunSet,
        nightTime;

    if (this.props.sunRisePosition > 0) {
      sunRise = (
        <span className="sunrise-line" style={{ left: this.props.sunRisePosition }}/>
      )
    }

    if (this.props.sunSetPosition > 0) {
      sunSet = (
        <span className="sunset-line" style={{ left: this.props.sunSetPosition }}/>
      )
    }

    if (this.props.nextSunRisePosition > 0) {
      nextSunRise = (
        <span className="next-sunrise-line" style={{ left: this.props.nextSunRisePosition }}/>
      )
    }

    if (this.props.nextSunSetPosition > 0) {
      nextSunRise = (
        <span className="next-sunset-line" style={{ left: this.props.nextSunSetPosition }}/>
      )
    }

    if (this.props.nightLength > 0) {
      nightTime = (
        <span className="night-time" style={{ left:nightStart, width:this.props.nightLength }}/>
      )
    }

    return (
      <div>
        {nightTime}
        {sunRise}
        {sunSet}
        {nextSunRise}
        {nextSunSet}
      </div>
    );
  }
}

//

// <span className="sunrise-line" style={{ left: this.state.sunRisePosition }}/>
// <span className="next-sunrise-line" style={{ left: this.state.nextSunRisePosition }}/>
// <span className="sunset-line" style={{ left: this.props.sunSetPosition }}/>
