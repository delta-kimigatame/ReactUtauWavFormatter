# ReactUtauWavFormatter
wavファイルをUTAUに最適化するwebアプリ

# UTAUとは
飴屋／菖蒲氏によって公開されている、Windows 向けに作成された歌声合成ソフトウェアです。
UTAU 公式サイト(http://utau2008.web.fc2.com/)

# 使い方
1. wavファイルが入ったzipファイルを用意する。
1. 「[wav入り zipを選択]ボタンを押す。
1. 準備したzipを選ぶ。
1. 変換が終わるまでしばらく待つ
1. [zipダウンロード]ボタンを押すと、変換したzipをダウンロードできる。

# 最適なwavとは
* モノラル/44,100Hz/16bitのデータ
* wavのヘッダに余計なデータが入っていない。
* DCオフセットの除去
* (iOSで録音した場合)windows用にファイル名を正規化

# 公開先
https://k-uta.jp/UtauWavFormatter/

# ドキュメント
https://delta-kimigatame.github.io/ReactUtauWavFormatter/