import * as React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * 処理完了したzipをダウンロードするボタン
 *  */
export const DownloadButton: React.FC<Props> = (props) => {
  const onButtonClick = () => {};

  return (
    <Box sx={{ m:1 }}>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        sx={{ textTransform: "none" }}
        disabled={props.zip === null}
        onClick={onButtonClick}
        href={props.zip===null?"":props.zip}
      >
        <Typography>zipダウンロード</Typography>
      </Button>
    </Box>
  );
};

type Props = {
  zip: null | string;
};
