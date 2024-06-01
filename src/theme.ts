/**全体のテーマを設定する。 */
import { purple, grey, blueGrey, red } from "@mui/material/colors";
import { ThemeOptions } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: purple,
          secondary: red,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: grey[200],
            paper: grey[200],
          },
        }
      : {
          // palette values for dark mode
          primary: purple,
          secondary: red,
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
          background: {
            default: blueGrey[900],
            paper: blueGrey[900],
          },
        }),
  },
});
