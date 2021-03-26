import Image from 'next/image'

export default function HouseMaker() {
  return (
    <div className="w-80 h-12 my-2.5 flex justify-center items-center relative">
      <h2 className="contents-title">ハウスメーカー</h2>
      <div className="btn">
        <Image
          src="/pencil-alt.svg"
          alt="新規作成ボタン"
          width={38}
          height={38}
        />
      </div>
    </div>
  );
}
