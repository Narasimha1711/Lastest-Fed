/* eslint-disable react/prop-types */
import "./../widgets/widgets.css";
import KeyboardArrowUpIcon from "@mui/icons-material/keyboardArrowUp";
const Widgets = ({name,count,see,icon}) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{name}</span>
        <span className="counter"> {count} </span>
        <span className="link"> {see}</span>
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


