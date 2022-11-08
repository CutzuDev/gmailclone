import { Button } from "@mui/material";
import "./Components.css";
import AddIcon from "@mui/icons-material/Add";
import SideBarOption from "./SideBarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SideBarOption
        Icon={<InboxIcon />}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SideBarOption Icon={<StarIcon />} title="Inbox" number={54} />
    </div>
  );
}

export default Sidebar;
