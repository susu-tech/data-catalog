import dummyDataset from "../../dummy/dummy_dataset.json" assert { type: "json" };

type DatasetType = {
  dataOfficer: string;
  usage: string;
  email: string;
  link: string;
};

const datasetLabel: {
  [K in string]: string;
} = {
  dataOfficer: "データ管理者",
  usage: "データ利用方法",
  email: "メール",
  link: "リンク",
};

export default function Dataset() {
  const dataset = getData();
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
              {Object.entries(dataset).map(([key, val]) => {
                return (
                  <tr key={key}>
                    <td>{datasetLabel[key] || key}</td>
                    <td>{val}</td>
                  </tr>
                );
              })}
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

function getData(): DatasetType {
  return dummyDataset;
}
