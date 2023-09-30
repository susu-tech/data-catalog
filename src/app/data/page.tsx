import Link from "next/link";

export default function Portal() {
  return (
    <>
      <div className="flex justify-center h-screen bg-stone02">
        <div className="mt-8 border px-8 py-4 w-10/12 max-w-5xl h-fit rounded-lg bg-white">
          <h1 className="text-2xl font-bold text-main">データタイトル</h1>
          <p className="text-sm text-stone04">データ提供組織</p>
          <p className="mt-2">
            データの説明。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>

          <hr className="mt-4" />
          <table className="mt-4 w-full">
            <thead>
              <tr className="text-left">
                <th className="w-1/2">項目</th>
                <th>値</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>データ管理者</td>
                <td>XXX</td>
              </tr>
              <tr>
                <td>データ利用方法</td>
                <td>YYY</td>
              </tr>
              <tr>
                <td>連絡先</td>
                <td>sample@example.com</td>
              </tr>
              <tr>
                <td>リンク</td>
                <td>http://example.com</td>
              </tr>
            </tbody>
          </table>

          <hr className="mt-4" />
          <h2 className="text-lg mt-4">データサンプル</h2>
          <div className="mt-2 bg-stone02 border h-32 flex items-center justify-center">
            表やJsonなどの項目イメージ
          </div>

          <hr className="mt-6" />
          <h2 className="text-lg mt-4">データ利用例</h2>
          <div className="mt-2 bg-stone02 border h-48 flex items-center justify-center">
            データからわかることなど分析のイメージ
          </div>

          <hr className="mt-6" />
          <h2 className="text-lg mt-4">Q&A</h2>
          <div className="mt-2 bg-stone02 border h-32 flex items-center justify-center">
            Q&A
          </div>
        </div>
      </div>
    </>
  );
}
