import React from "react";
import Modal from "react-bootstrap/Modal";
import Chart from "react-apexcharts";
import { customBarData } from "../../constants/constants";
import MediaQuery from 'react-responsive';

export const DbRow = (props) => {
    return <div className="dashboard-row">{props.children}</div>;
};

export const DbCenterRow = (props) => {
    return <div className="dashboard-align-center-row">{props.children}</div>;
};

const Icon = (props) => {
    return (
        <i
            className= {props.iconName}
            style={{
                fontSize: props.iconSize,
                marginRight: props.iconMargin,
                marginBottom: "5px",
                color: props.iconColor ?? "#7d7d7d",
            }}
        >
        </i>
    );
};

export const IconButton = (props) => {
    //iconSize, iconName, iconColor, onTap
    return (
        <button
            className="btn-sm"
            style={{border: "none", outline: "none", background: "white"}}
            onClick={props.onTap}
        >
            <Icon
                iconSize={props.iconSize}
                iconColor={props.iconColor}
                iconName={props.iconName}
            />
        </button>
    );
};
export const IconText = (props) => {
    //textSize, textDisplayed, iconName, textColor?
    return (
        <div className="d-flex align-items-center">
            <Icon
                iconName={props.iconName}
                iconSize={props.textSize}
                iconMargin={props.iconMargin}
                iconColor={props.textColor}
            />
            <p
                style={{
                    fontSize: props.textSize,
                    marginBottom: "10px",
                    marginLeft:"5px",
                    color: props.textColor ?? "#7d7d7d",
                    textDecoration: props.textDecoration ?? "none",
                    wordWrap: "revert",
                    textAlign: "center",
                }}
            >
                {props.textDisplayed}
            </p>
        </div>
    );
};

export const renderQDes = (des) => {
    var length = 65;
    var i = 0;
    if (des.length > length) {
        var ans = des.substring(0, length);
        //while (des[length + i] !== " " || des[length + i] !== null) {
            // Make sure the des ends with a complete word
            //ans = ans + des[length + i];
            //i++;
        //}
        return ans + "...";
    }
    return des;
};

export const renderSuccessTag = (text) => {
    return (
        <div className="height-30 d-flex justify-content-start align-items-end" style={{marginBottom: "0.8rem"}}>
            <div className="d-flex justify-content-start">
                <span
                    className="text-success"
                    style={{color: "#14CC75", fontSize: "15px", marginRight: "10px"}}
                >
                    {text}
                </span>
            </div>
        </div>
    );
};

export const renderWaitTag = (text) => {
    return (
        <div className="height-30 d-flex justify-content-start align-items-end" style={{marginBottom: "0.8rem"}}>
            <div className="d-flex justify-content-start">
                <span
                    style={{color: "#7D7D7D", fontSize: "15px", marginRight: "10px"}}
                >
                    {text}
                </span>
            </div>
        </div>
    );
};

export const ReviewHeader = (props) => {
    return (
        <DbRow>
            <div className="col-2"/>
            <MediaQuery minDeviceWidth={1224}>
            <div className="col-8 d-flex justify-content-center align-items-center">
                <strong className="text-20" style={{color: "#7D7D7D"}}>Review Your Performance</strong>
            </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <div className="col-8 d-flex justify-content-center align-items-center">
                <strong className="text-12" style={{color: "#7D7D7D"}}>Review Your Performance</strong>
            </div>
            </MediaQuery>
            <div className="col-2"/>
        </DbRow>
    );
};

export const QuestionTitle = (props) => {
    return (
        <div className="row" style={{marginLeft: "10px", marginBottom: "10px"}}>
            <MediaQuery minDeviceWidth={1224}>
            <h2 className="review-text" style={{color: "#98b8f6"}}>Q:</h2>
            <h2 className="review-text" style={{color: "#000000"}}>{props.title}</h2>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <h4 className="review-text" style={{color: "#98b8f6"}}>Q:</h4>
            <h4 className="review-text" style={{color: "#000000"}}>{props.title}</h4>
            </MediaQuery>
        </div>
    );
};

export const Comments = (props) => {
    return (
        <div className="container">
            <p className="comments">{props.comments}</p>
        </div>
    );
};

const sectionTitleStyle = {
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "15px",
    lineHeight: "18px",
    color: "#7D7D7D",
};

export const CategoryTitle = (props) => {
    return <p style={sectionTitleStyle}>{props.title}</p>;
};

export const MyModal = (props) => {
    return (
        <Modal
            {...props}
            dialogClassName= {!props.isResume ? "my-modal" : "resume-modal"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{border: "none", height: "6px"}}/>
            {props.children}
        </Modal>
    );
};

export const OverallScore = (props) => {
  var options = customBarData(props.percent, props.bgColor, props.barColor);
  return (
    <Chart
      options={options.options}
      series={options.series}
      type="radialBar"
      height={150}
      key={"overall"}
    />
  );
};