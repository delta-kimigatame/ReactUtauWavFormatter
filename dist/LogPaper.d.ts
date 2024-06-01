import * as React from "react";
/**
 * wav解析の実行結果を表示する。
 *  */
export declare const LogPaper: React.FC<Props>;
/**
 * @param logs 表示するログ、1行毎にArrayに格納。セクション毎に空の文字列を格納。
 */
type Props = {
    logs: Array<string>;
};
export {};
