import { CheckBox } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./Pages.css";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default EmailList;
