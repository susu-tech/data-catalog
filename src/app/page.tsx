import { MainSearchForm } from "@/components/mainSearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-2 bg-stone02 h-16 flex items-center justify-center">
        <MainSearchForm>検索キーワード</MainSearchForm>
      </div>

      <div className="mt-8 ml-8 flex">
        <div className="w-60">
          <h2 className="text-xl text-main-dark">検索条件</h2>
          <hr />
          <h3 className="text-lg mt-4">組織</h3>
          <div className="flex-col space-y-2">
            <ConditionButton>組織A</ConditionButton>
            <ConditionButton>組織B</ConditionButton>
            <ConditionButton>組織C</ConditionButton>
          </div>

          <h3 className="text-lg  mt-8">タグ</h3>
          <div className="flex-col space-y-2">
            <ConditionButton>タグX</ConditionButton>
            <ConditionButton>タグY</ConditionButton>
            <ConditionButton>タグZ</ConditionButton>
          </div>
        </div>

        <div className="ml-4 mr-8 grow">
          <p className="ml-2 text-sm">5件のデータが見つかりました</p>
          <div className="mt-4 flex-col space-y-4">
            {Array(5)
              .fill("")
              .map((val, idx) => {
                return <DataCard key={idx} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

type CondButtonProps = {
  children: string;
};

const ConditionButton = (props: CondButtonProps) => {
  const { children } = props;
  return (
    <button className="bg-stone02 w-60 text-left px-2 py-1 hover:bg-stone03">
      {children}
    </button>
  );
};

const DataCard = () => {
  return (
    <div>
      <Link href="/data">
        <div className="border px-4 py-2 bg-white hover:bg-main-light">
          <h3 className="text-2xl font-bold text-main">データタイトル</h3>
          <p className="text-sm text-stone04">データ提供組織</p>
          <p className="mt-2">
            データの説明。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p className="mt-1 text-sm">最終更新日: 2023/08/23 | 形式: pdf</p>
        </div>
      </Link>
    </div>
  );
};
