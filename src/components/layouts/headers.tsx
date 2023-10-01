import Link from "next/link";
import { MainButton } from "../elements/mainButton";

export const Header = () => {
  return (
    <header>
      <div className="bg-main h-12 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-white text-xl font-bold ml-2">データカタログ</h1>
        </Link>
        <div className="mr-4 flex space-x-2">
          <MainButton>利用方法</MainButton>
          <MainButton>カタログ登録</MainButton>
          <MainButton>カタログAPI</MainButton>
        </div>
      </div>
    </header>
  );
};
