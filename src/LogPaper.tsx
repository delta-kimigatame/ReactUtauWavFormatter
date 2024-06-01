import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider/Divider";

export const LogPaper: React.FC<Props> = (props) => {
  return (
    <Paper sx={{ flexGrow: 1, m: 2, p: 1 }} elevation={3}>
      <Box sx={{ m: 1 }}>
        <Typography variant="subtitle2">実行結果</Typography>
        <Divider />
        {props.logs.length !== 0 && (
          <>
            {props.logs.map((line) => (
              <>
                <Typography variant="body2">{line}</Typography>
                <Divider />
              </>
            ))}
          </>
        )}
      </Box>
    </Paper>
  );
};

type Props = {
  logs: Array<string>;
};
