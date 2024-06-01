import * as React from "react";
import { PaletteMode } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";

import { product_name } from "./settings/setting";

export const Header: React.FC<Props> = (props) => {
  return (
    <AppBar position='relative'>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button variant="text" color="inherit">
          <Typography variant="subtitle2">{product_name}</Typography>
        </Button>
        <Box>
          <IconButton
            onClick={() => {
              props.setMode(props.mode === "dark" ? "light" : "dark");
            }}
          >
            {props.mode === "dark" ? <LightModeIcon /> : <ModeNightIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

type Props = {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
};
