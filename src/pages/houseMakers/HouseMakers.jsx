import { CreateHouseMaker } from './CreateHouseMaker'
import Image from 'next/image'

const HouseMakers = () => {
  return (
    <div className="w-80 h-16 my-2.5 flex justify-center items-center relative">
      <h2 className="contents-title">ハウスメーカー</h2>
      <div className="btn">
        <div className="btn-icon">
          <Image
            src="/pencil-alt.svg"
            alt="新規作成ボタン"
            width={38}
            height={38}
          />
        </div>
        <p className="flex justify-center items-center text-xs">追加</p>
      </div>
    </div>
  );
}

export default HouseMakers