import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider/Divider";

/**
 * wav解析の実行結果を表示する。
 *  */
export const LogPaper: React.FC<Props> = (props) => {
  return (
    <Paper sx={{ flexGrow: 1, m: 2, p: 1 }} elevation={3}>
      <Box sx={{ m: 1 }}>
        <Typography variant="subtitle2">実行結果</Typography>
        <Divider />
        {props.logs.length !== 0 && (
          <>
            {props.logs.map((line,i) => (
              <Box key={"l_"+i}>
                <Typography variant="body2" sx={{m:1}}>{line}</Typography>
                {line==="" && <Divider />}
              </Box>
            ))}
          </>
        )}
      </Box>
    </Paper>
  );
};

/**
 * @param logs 表示するログ、1行毎にArrayに格納。セクション毎に空の文字列を格納。
 */
type Props = {
  logs: Array<string>;
};
