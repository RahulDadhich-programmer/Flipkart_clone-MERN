import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";
import "./Profile.css";
const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount("");
    handleClose();
  };

  return (
    <>
      <div className="profile-box" onClick={handleClick}>
        <p className="profile-text">{account}</p>
      </div>
      {open && (
        <div className="menu">
          <div className="menu-item" onClick={logoutUser}>
            <PowerSettingsNewIcon className="icon" />
            <p className="logout-text">Logout</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
