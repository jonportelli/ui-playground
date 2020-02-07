import React from "react";
import "./multiCluster.scss";
import thumb from "/public/sample-images/asset_01_large.jpg";
import leftarrow from "./ui-images/arrow-left.png";
import rightarrow from "./ui-images/arrow-right.png";
import overflow from "./ui-images/overflow-indicator.png";
import items from "./sample_data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

export default class FixedCircleElements extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 0,
      rotation: -60,
      centerImage: null, 
      // transition: '',
    };

    this.refCircle = React.createRef();
    this.toTheLeft = this.toTheLeft.bind(this);
    this.toTheRight = this.toTheRight.bind(this);
    this.onSegmentClick = this.onSegmentClick.bind(this);

    // this.toggleTransition = this.toggleTransition.bind(this);
    // this.selectedImage = this.selectedImage.bind(this);
  }

  componentDidMount() {
    // Set the items to the array loaded from JSON
    if (items) {
      this.setState({
        isLoaded: true,
        items: items,
        selectedItem: 3
      });
    } else {
      this.setState({
        isLoaded: false,
        items: null,
        selectedItem:null,
      });
    }
  }

  // toggleTransition() {
  //   const transition = this.state.transition;
  //   this.setState({ transition: !this.state.transition });
  //   console.log(this);
  //   };

  // Need to choose which animation logic to use

  toTheLeft() {
    this.setState({ rotation: this.state.rotation - 270 });
  }

  toTheRight() {
    this.setState({ rotation: this.state.rotation + 270 });
  }
  onSegmentClick(event) {
    console.log(this);
    const id = event.currentTarget.id;
    document.getElementById(id).classList.toggle("active");
  }
  render() {
    const { centerImage } = this.state;
 
    console.log(this.refCircle);
    console.log(this.state.position);

    let selectedItem ="";
    if (this.state.items && this.state.selectedItem) {
     selectedItem = <img src={this.state.items[this.state.selectedItem].large} alt="thumb" /> 
    }
    
    let segments = "";

    if (this.state.items !== undefined) {
      segments = this.state.items.slice(0,9).map((item, i) => (
        // eslint-disable-next-line no-unused-expressions
       <div
          id={`segment-${i + 1}`}
          alt={item.title}
          className={`segment clipped-30`}
          onClick={this.onSegmentClick}
        >
          {/*           <img
            key={item.id}
            src={item.thumb}
            alt={item.title}
            //            className={`segment2 item-${i + 1}`}
          />
 */}{" "}
          <div class="indicator" />
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.thumb})` }}
            alt={item.title}
            className="image clipped-30"
          />
        </div>
      ));
    }
        console.log(centerImage);
    return (
      <div className="cluster-container">
        <div className="halo" />
        <svg
          width="125px"
          height="88px"
          viewBox="0 0 125 88"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <clipPath id="svgPath1">
              <path
                d="M62.0212766,8.3148618e-15 C82.8800672,8.3148618e-15 103.131689,2.60435953 122.476083,7.49901691 L124.042553,7.90089374 L102.746055,87.7657415 C89.7219126,84.4335831 76.0770788,82.6625175 62.0205027,82.6625175 C47.9650482,82.6625175 34.3210917,84.4335267 21.2976224,87.7657415 L0,7.90089374 C19.8185599,2.7470381 40.6006697,8.3148618e-15 62.0212766,8.3148618e-15 Z"
                id="Path"
              />
            </clipPath>
            <clipPath id="uiBackground">
              <path
                d="M432.9,71.2c-14.6-14.3-31-26.6-48.7-36.8c-12.9-7.5-26.5-13.8-40.6-18.8c-14-5.2-28.5-9.1-43.2-11.7
                C286.4,1.3,272.2,0,257.9,0c-15.5-0.2-31.1,1-46.4,3.7c-14.1,2.5-27.9,6.3-41.4,11.1c-14.7,5.1-28.8,11.6-42.3,19.5
                C109.7,44.8,93,57.6,78,72.3l58.5,58.7c9.8-9.7,20.8-18,32.7-24.9c5.6-3.2,11.4-6.1,17.3-8.7l0.1,0.2c3-1.4,6.1-2.7,9.3-3.8
                c0.3-0.1,0.5-0.2,0.8-0.3l0.9-0.3c3.2-1.1,6.4-2.1,9.6-3v-0.2c6.2-1.8,12.5-3.3,18.8-4.5c6.4-1.1,12.8-1.9,19.2-2.2v0.2
                c3.3-0.3,6.7-0.4,10-0.5h1.8c3.4,0,6.7,0.2,10,0.5v-0.2c6.4,0.4,12.9,1.1,19.2,2.2c6.4,1.1,12.7,2.6,18.8,4.5v0.2
                c3.2,0.9,6.4,1.9,9.6,3c0.3,0.1,0.5,0.2,0.8,0.3l0.9,0.3c3.1,1.2,6.2,2.5,9.2,3.8l0.1-0.2c6,2.5,11.7,5.5,17.3,8.7
                c11.9,6.9,22.9,15.2,32.7,24.9L434,72.3L432.9,71.2z"
              />
              id="uiBgPath" />
            </clipPath>
          </g>
        </svg>

        <div ref={this.refCircle} className="cluster-body">
          <div
            className="segments-page cluster-layer"
            style={{
              transform: `rotate(${this.state.rotation}deg)`
            }}
          >
            {segments}
          </div>

          <div className="cluster-ui cluster-layer">
            <div
              className="segment clipped-30 cluster-paging-button cluster-next-page-button"
              onClick={this.toTheRight}
            >
              <FontAwesomeIcon
                icon={faCaretRight}
                color="white"
                size="3x"
                className="icon"
              />
            </div>

            <img src={overflow} alt="Overflow" className="segment clipped-30" />
            <div
              className="segment clipped-30 cluster-paging-button cluster-prev-page-button"
              onClick={this.toTheLeft}
            >
              <FontAwesomeIcon
                icon={faCaretLeft}
                color="white"
                size="3x"
                className="icon"
              />
            </div>
          </div>
        </div>
        <div className="central-circle">
          <div className="full-screen" />
{  
selectedItem
}
          {/* centerImage !== null ? centerImage : <img src={thumb} alt="thumb" />  */}
          {/* <img src={thumb} alt="thumb" /> */}
        </div>
        {/* <div className="overlay">
            <img id="bg" src='https://i.postimg.cc/D0JFDj4s/Custom-Preset3.png' border='0' alt='Open-Multicluster-Color'/>
          </div> */}
      </div>
    );
  }
}
