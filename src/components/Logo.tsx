export function Logo() {
  return (
    <div className="relative right-0 flex size-10 translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0px_0px_6px_0px_#00000040] lg:absolute lg:right-0 lg:z-20 lg:scale-200">
      <div className="absolute h-[18px] w-[18px] rounded-[70%_50%_55%_0%] bg-black" />
      <div className="absolute h-[10px] w-[18px] rounded-[80%_40%_55%_0%] bg-white" />
      <div className="absolute h-[4px] w-[4px] translate-x-[2.5px] -translate-y-[1px] rounded-full bg-black" />
      <div className="absolute h-[3px] w-[6px] translate-x-[11px] -translate-y-[1px] -rotate-[10deg] rounded-tr-[90%] bg-black" />
    </div>
  )
}
