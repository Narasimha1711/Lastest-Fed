import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Raghav Reddy</span>
            <span className="widgetSmUserTitle">user</span>
          </div>
          <button className="widgetSmButton">
            {/* <Visibility className="widgetSmIcon" /> */}
            more info
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Priyanka Singh</span>
            <span className="widgetSmUserTitle">user</span>
          </div>
          <button className="widgetSmButton">
            {/* <Visibility className="widgetSmIcon" /> */}
            more info
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Prakash yadav</span>
            <span className="widgetSmUserTitle">seller</span>
          </div>
          <button className="widgetSmButton">
            {/* <Visibility className="widgetSmIcon" /> */}
            more info
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kumar Selavan</span>
            <span className="widgetSmUserTitle">seller</span>
          </div>
          <button className="widgetSmButton">
            {/* <Visibility className="widgetSmIcon" /> */}
            more info
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Renuka Mishra</span>
            <span className="widgetSmUserTitle">user</span>
          </div>
          <button className="widgetSmButton">
            {/* <Visibility className="widgetSmIcon" /> */}
            more info
          </button>
        </li>
      </ul>
    </div>
  );
}