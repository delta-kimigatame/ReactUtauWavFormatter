import * as React from "react";
import { PaletteMode } from "@mui/material";
/**
 * ヘッダ。
 * ライトモード・ダークモードを切り替えるボタンを有する。
 *  */
export declare const Header: React.FC<Props>;
type Props = {
    mode: PaletteMode;
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
};
export {};
