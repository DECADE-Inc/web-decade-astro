import { ArrowUpIcon } from "@heroicons/react/16/solid"

interface PropTypes {
    href: string
}


export default function TombolJelajah(props: PropTypes) {
    const {href} = props

  return (
   <a href={href} className="text-lg font-bold flex gap-2 items-center">
    <div className="py-1 px-2 text-sm sm:text-base md:py-2 md:px-4 border rounded-full">JELAJAHI</div>
    <div className="p-2 rounded-full bg-black w-fit">
        <div className="w-4 h-4 md:w-6 md:h-6 rotate-[30deg] ">
            <ArrowUpIcon color="white" />
        </div>
    </div>
</a>
  )
}
