import * as React from "react";
export declare const FileSelectButton: React.FC<Props>;
type Props = {
    processing: boolean;
    setProcessing: React.Dispatch<React.SetStateAction<boolean>>;
    setZip: React.Dispatch<React.SetStateAction<string | null>>;
    logs: Array<string>;
    setLogs: React.Dispatch<React.SetStateAction<Array<string>>>;
};
export {};
