import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

import { product_name } from "./settings/setting";

export const HelpDialog: React.FC<Props> = (props) => {
  return (
    <>
      <Dialog
        onClose={() => {
          props.setDialogOpen(false);
        }}
        open={props.dialogOpen}
        fullWidth
      >
        <DialogTitle>{product_name}</DialogTitle>
        <IconButton
          onClick={() => {
            props.setDialogOpen(false);
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        <DialogContent>
          <Box sx={{ p: 1 }}>
            <Typography variant="h6">これは何?</Typography>
            <Box sx={{ pl: 3 }}>
              <Typography variant="body2">
                wavデータをUTAUで使用できる形式に変換します。
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ p: 1 }}>
            <Typography variant="h6">使い方</Typography>
            <Typography variant="body2">
              <ol>
                <li>wavファイルが入ったzipファイルを用意する。</li>
                <li>「[wav入り zipを選択]ボタンを押す。</li>
                <li>準備したzipを選ぶ。</li>
                <li>変換が終わるまでしばらく待つ</li>
                <li>
                  [zipダウンロード]ボタンを押すと、変換したzipをダウンロードできる。
                </li>
              </ol>
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 1 }}>
            <Typography variant="h6">最適なwavとは</Typography>
            <Typography variant="body2">
              <ul>
                <li>モノラル/44,100Hz/16bitのデータ</li>
                <li>wavのヘッダに余計なデータが入っていない。</li>
                <li>DCオフセットの除去</li>
                <li>(iOSで録音した場合)windows用にファイル名を正規化</li>
              </ul>
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

type Props = {
    dialogOpen: boolean;
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  