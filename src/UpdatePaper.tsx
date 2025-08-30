import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider/Divider";

/**
 * 更新履歴を表示する
 *  */
export const UpdatePaper: React.FC = () => {
  const updateLogs: Array<string> = new Array(
    "2025/8/31 wavファイルのヘッダ長が特殊な場合に不正なwavを出力してしまう不具合の修正",
    "2025/6/8 wavファイルの末尾にメタデータが含まれていると読み込めない不具合の修正",
    "2025/2/9 ヴを正規化できない不具合の修正",
    "2024/6/23 もともと44100Hzのwavを読み込んだとき、wavの中身が空になってしまうことがある不具合の修正",
    "2024/6/12 サンプリングレートの変更に失敗する場合がある不具合の修正",
    "2024/6/2 日本語windowsで作成したzipが文字化けする不具合の修正",
    "2024/6/1 初版公開",
  );
  return (
    <Paper sx={{ flexGrow: 1, m: 2, p: 1 }} elevation={3}>
      <Box sx={{ m: 1 }}>
        <Typography variant="subtitle2">更新履歴</Typography>
        <Divider />
        {updateLogs.length !== 0 && (
          <>
            {updateLogs.map((line, i) => (
              <Box key={"l_" + i}>
                <Typography variant="body2" sx={{ m: 1 }}>
                  {line}
                </Typography>
              </Box>
            ))}
          </>
        )}
      </Box>
    </Paper>
  );
};
