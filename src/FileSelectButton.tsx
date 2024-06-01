import * as React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import JSZip from "jszip";
import { Wave } from "utauwav";
import { NormalizeJP } from "./lib/FilenameNormalize";

/**
 * zipファイルを選択するボタン。
 * zipファイル選択後、処理完了までdisableになる。
 *  */
export const FileSelectButton: React.FC<Props> = (props) => {
  const inputRef = React.useRef(null);
  const [buttonText, setButtonText] =
    React.useState<string>("wav入り zipを選択");

  const onFileInputChange = (event) => {
    if (!event.target.files) return;
    props.setProcessing(true);
    const zip = new JSZip();
    const newZip = new JSZip();
    const logs = props.logs.slice();
    zip.loadAsync(event.target.files[0]).then((z) => {
        setButtonText("zip解析中")
      ZipExtract(z.files, 0, newZip, logs);
    });
  };

  const ZipExtract = (
    files: { [key: string]: JSZip.JSZipObject },
    index: number,
    newZip: JSZip,
    logs: Array<string>
  ) => {
    const k = Object.keys(files)[index];
    const newLogs = logs.slice();
    files[k].async("arraybuffer").then((result) => {
      try {
        const wav = new Wave(result);
        newLogs.push(k + "を読み込みました。");
        newLogs.push(
          "チャンネル:" +
            wav.channels +
            "　サンプリング周波数:" +
            wav.sampleRate +
            "　ビット深度:" +
            wav.bitDepth
        );
        wav.channels = 1;
        wav.sampleRate = 44100;
        wav.bitDepth = 16;
        newLogs.push(
          "【変換後】チャンネル:" +
            wav.channels +
            "　サンプリング周波数:" +
            wav.sampleRate +
            "　ビット深度:" +
            wav.bitDepth
        );
        wav.RemoveDCOffset();
        newLogs.push("DCOffsetを除去しました");
        newLogs.push(k + "のファイル名正規化を試みました。");
        props.setLogs(newLogs);
        newZip.file(NormalizeJP(k), wav.Output());
        newLogs.push("");
      } catch (error) {
        newZip.file(NormalizeJP(k), result);
        newLogs.push(k + "はwavファイルではありません。");
        newLogs.push(k + "のファイル名正規化を試みました。");
        newLogs.push(k + "をzipに追加しました。");
        newLogs.push("");
        props.setLogs(newLogs);
      }
      if (index < Object.keys(files).length - 1) {
        ZipExtract(files, index + 1, newZip, newLogs);
      } else {
        setButtonText("zip再圧縮中")
        newZip.generateAsync({ type: "uint8array" }).then((result) => {
          const zipFile = new Blob([result], {
            type: "application/zip",
          });
          props.setZip(URL.createObjectURL(zipFile));
          props.setProcessing(false);
          setButtonText("wav入り zipを選択")
        });
      }
    });
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
    <Box sx={{ m: 1 }}>
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
  logs: Array<string>;
  setLogs: React.Dispatch<React.SetStateAction<Array<string>>>;
};
