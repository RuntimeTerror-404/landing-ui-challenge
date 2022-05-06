import React from "react";
import "./Video.css";

function Video() {
  return(
      <div className="video-paragraph">
          <div className="container6">
            <div className="heading-btn">
                <p className="video-h3">Yet preference connection unpleasant yet melancholy but end appearance</p>
                <div className="btn"><button>Get Started Now</button></div>
            </div>

            <div className="table-video">
                <div className="table">
                    <div className="point1">
                        <div className="h3"><button>1</button></div>
                        <div className="para1">
                            <h2>First Working Process</h2>
                            <p>Blessing it ladyship on sensible judgment settling outweigh.</p>
                        </div>
                    </div>
                    <div className="point2">
                        <div className="h3"><button>2</button></div>
                        <div className="para1">
                            <h2>Dedicated Team</h2>
                            <p>Warmly little before cousin sussex entire men set.</p>
                        </div>
                    </div>
                    <div className="point3">
                        <div className="h3"><button>3</button></div>
                        <div className="para1">
                            <h2>24/7 Hours Support</h2>
                            <p>And excellence partiality estimating terminated day everything.</p>
                        </div>
                    </div>
                </div>

                <div className="video-img">
                    <img src={require("../../assets/image-4.png")} height="350"/>
                </div>

            </div>

          </div>

      </div>
  )
}

export default Video;
