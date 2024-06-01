import * as React from "react";
import { PaletteMode } from "@mui/material";
export declare const Header: React.FC<Props>;
type Props = {
    mode: PaletteMode;
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
};
export {};
