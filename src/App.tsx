import { NavBar } from '@/components/NavBar'
import heroImg from '@/assets/hero.jpg'

const description = [
  {
    name: '外觀',
    content:
      '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。',
  },
  {
    name: '棲地',
    content:
      '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。',
  },
  {
    name: '食性',
    content:
      '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。',
  },
]

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <NavBar />

      <main>
        <section className="relative min-h-[312px] overflow-clip text-right text-white lg:min-h-[600px]">
          <img
            className="absolute top-0 left-0 size-full min-w-[560px] origin-bottom-left object-cover"
            src={heroImg}
            alt=""
          />

          <div className="absolute right-0 bottom-0 px-6 pb-6 lg:px-12 lg:pb-12">
            <h1 className="text-[48px] leading-[58px]">白頭翁 (Chinese bulbul)</h1>
            <p className="mt-2 text-[16px] leading-[19px]">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
            </p>
          </div>
        </section>

        <section className="bg-[#DCCCBC] px-12 py-[60px] lg:px-[60px]">
          <ul className="flex flex-col gap-12 lg:flex-row">
            {description.map((item, index) => (
              <li key={index} className="flex flex-1 gap-6">
                <div className="relative h-[98px] w-[50px] shrink-0">
                  <h2 className="h-[82px] w-9 text-[34px] leading-[41px] font-bold">{item.name}</h2>
                  <div className="absolute right-0.5 bottom-[3px] size-[25px] rounded-full border-[8px] border-[#AA6666]/60"></div>
                </div>
                <p className="text-[16px] leading-[19px]">{item.content}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
