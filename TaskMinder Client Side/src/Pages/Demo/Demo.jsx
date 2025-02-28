import { Skeleton } from "@/components/ui/skeleton"
import { ScaleLoader } from "react-spinners"

export const Demo = () => {
  return (
    <div className='container mx-auto h-screen flex justify-center items-center'>
      <ScaleLoader></ScaleLoader>
    </div>
  )
}
