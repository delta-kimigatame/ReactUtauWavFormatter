import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

/**
 * フッタ
 *  */
export const Footer: React.FC<Props> = (props) => {
  const theme = props.theme;
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Divider />
      <Box
        sx={{
          justifyContent: "space-between",
          display: matches ? "flex" : "block",
          p: 2,
        }}
      >
        <Box sx={{ flex: 1, order: 1 }}>
          <Typography>
            <Link
              variant="body2"
              color="inherit"
              href="https://twitter.com/delta_kuro"
            >
              開発者Xアカウント
            </Link>{" "}
            <br />
            <Link
              variant="body2"
              color="inherit"
              href="https://github.com/delta-kimigatame/ReactUtauWavFormatter"
            >
              github
            </Link>{" "}
            <br />
            <br />
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: matches ? "right" : "left",
            flex: 1,
            order: matches ? 3 : 2,
          }}
        >
          <Typography variant="caption">
            UTAUは飴屋／菖蒲氏によって公開されている、Windows向けに作成された歌声合成ソフトウェアです。<br /><br />
            本ソフトウェアはUTAU公式とは無関係です。
          </Typography>
          <br />
          <br />
        </Box>
        <Box
          sx={{
            textAlign: matches ? "center" : "left",
            flex: 1,
            order: matches ? 2 : 3,
          }}
        >
          <Typography variant="body2">
            きみがため
            <br />
            <br />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

type Props = {
  theme;
};
