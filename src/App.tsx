import { MenuBar } from './components/MenuBar'
import bannerImg from './assets/banner.jpg'

const description = [
  {
    title: '外觀',
    content:
      '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。',
  },
  {
    title: '棲地',
    content:
      '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。',
  },
  {
    title: '食性',
    content:
      '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。',
  },
]

export default function App() {
  return (
    <main className="flex flex-col lg:flex-row">
      <MenuBar />

      <div className="bg-[#DCCCBC] lg:h-full lg:min-h-screen">
        <section className="relative h-[312px] w-full overflow-clip lg:h-full">
          <img
            className="size-full min-w-[559px] object-cover object-left-bottom"
            src={bannerImg}
            alt="白頭翁"
            width={1075}
            height={600}
          />
          <div className="absolute right-0 bottom-0 px-6 pb-6 text-right text-white lg:px-12 lg:pb-12">
            <h1 className="text-5xl leading-[58px] font-bold">白頭翁 (Chinese bulbul)</h1>
            <p className="mt-2 leading-[19px]">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-12 px-12 py-[60px] lg:flex-row lg:px-[60px]">
          {description.map((item, index) => (
            <div key={index} className="flex gap-6 lg:flex-1">
              <div className="relative h-[98px] w-[50px] shrink-0">
                <h2 className="h-[82px] w-9 text-[34px] font-bold">{item.title}</h2>
                <div className="absolute right-0.5 bottom-[3px] size-[25px] rounded-full border-[8px] border-[#AA6666]/60"></div>
              </div>
              <p className="leading-[19px]">{item.content}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
