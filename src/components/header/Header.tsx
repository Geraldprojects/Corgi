import { MenuItem } from "./MenuItem";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ContactMailIcon from '@mui/icons-material/ContactMail';

//css
import "../../App.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="menu">
        <MenuItem Title="Home" Icon={HomeIcon} />
        <MenuItem Title="About" Icon={ImportContactsIcon} />
        <MenuItem Title="Gallery" Icon={PhotoSizeSelectActualIcon} />
        <MenuItem Title="Contact" Icon={ContactMailIcon} />
        <div className="book">
        <button className="bookbtn">Book Now</button>
      </div>
      </div>
      
    </div>
  );
};
