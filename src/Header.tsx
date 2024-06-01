import * as React from "react";
import { PaletteMode } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";

import { product_name } from "./settings/setting";
import { HelpDialog } from "./HelpDialog";

/**
 * ヘッダ。
 * ライトモード・ダークモードを切り替えるボタンを有する。
 *  */
export const Header: React.FC<Props> = (props) => {
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
  return (
    <>
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button variant="text" color="inherit">
            <Typography variant="subtitle2">{product_name}</Typography>
          </Button>
          <Box>
            <IconButton
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              <HelpIcon />
            </IconButton>
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
      <HelpDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </>
  );
};

type Props = {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
};
