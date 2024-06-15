import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

/**
 * このアプリの説明
 *  */
export const HelpContents: React.FC = () => {
  return (
    <>
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
            <li>「[zipを選択]ボタンを押す。</li>
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
            <li>
              (iOSで録音した場合)windowsで使えるようにファイル名の文字化けを直す
            </li>
          </ul>
        </Typography>
      </Box>
    </>
  );
};
