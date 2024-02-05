import React, { useState } from "react";
import "./styles/NavBar.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
function NavBar() {
  //const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  //const toggleDropdown = () => setIsDropDownVisible(!isDropDownVisible);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const [value, setValue] = React.useState (30);
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="navbar_wrapper">
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Categories
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                // Targeting the underlying Paper component of the Menu
                borderRadius: "10px", // Adjust this value to increase or decrease the roundness
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Optional: adding a soft shadow for depth
              },
            }}
          >
            <MenuItem onClick={handleClose}>Category 1</MenuItem>
            <MenuItem onClick={handleClose}>Category 2</MenuItem>
            <MenuItem onClick={handleClose}>Category 3</MenuItem>
          </Menu>
        </div>
        <div>
          <h1>HOME HARMONY</h1>
        </div>
        <div>
          <p>login</p>
        </div>
      </div>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Box>
    </div>
  );
}

export default NavBar;
