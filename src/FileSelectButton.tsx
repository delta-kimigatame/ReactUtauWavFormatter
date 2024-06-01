import * as React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export const FileSelectButton: React.FC<Props> = (props) => {
  const inputRef = React.useRef(null);
  const [buttonText, setButtonText] =
    React.useState<string>("wav入り zipを選択");

  const onFileInputChange = (event) => {
    console.log(event.target.files[0]);
  };

  /**
   * 非表示にしているファイル選択用inputを発火する。
   * processingとzipを初期化する。
   */
  const onButtonClick = () => {
    props.setProcessing(false);
    props.setZip(null);
    inputRef.current.click();
  };

  return (
    <Box sx={{ m:1 }}>
      <input hidden ref={inputRef} type="file" onChange={onFileInputChange} />
      <Button
        fullWidth
        color="primary"
        variant="contained"
        sx={{ textTransform: "none" }}
        disabled={props.processing}
        onClick={onButtonClick}
      >
        {props.processing && (
          <CircularProgress color="inherit" size={20} sx={{ mr: 2 }} />
        )}
        <Typography>{buttonText}</Typography>
      </Button>
    </Box>
  );
};

type Props = {
  processing: boolean;
  setProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  setZip: React.Dispatch<React.SetStateAction<string | null>>;
  logs: Array<string>,
  setLogs: React.Dispatch<React.SetStateAction<Array<string>>>;
};
