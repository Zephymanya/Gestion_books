import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box } from "@mui/system";
import Router, { useRouter } from "next/router";

const Header = () => {
  const [valeur, setValeur] = useState("");
  const andlechange = (e, val) => {
    setValeur(val);
    if (val == 0) {
      Router.push("/");
    } else if (val == 1) {
      Router.push("/books");
    } else if (val === 2) {
      Router.push("/books/add");
    }
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#b67469" }}>
      <Toolbar>
        <MenuBookIcon sx={{ fontSize: "26px" }} />

        <Box display="flex" margin={"auto"}>
          <Tabs onChange={andlechange} value={valeur} textColor="inherit">
            <Tab label="Home" />
            <Tab label="All Books" />
            <Tab label="Add new book" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
