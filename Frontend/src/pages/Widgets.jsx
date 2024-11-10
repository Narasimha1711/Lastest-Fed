/* eslint-disable react/prop-types */
import "./widgets.css";
import KeyboardArrowUpIcon from "@mui/icons-material/keyboardArrowUp";
const Widgets = ({name,count,see,icon}) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{200}</span>
        <span className="counter"> {200} </span>
        <span className="link"> {200}</span>
      </div>
      <div className="right">
        <div className="percentage">
            <KeyboardArrowUpIcon />
            200 %
        </div>
        <span className="icon" > {icon}</span>
      </div>
    </div>
  );
};

export default Widgets;



