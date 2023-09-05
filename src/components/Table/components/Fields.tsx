import { Schema } from "@/lib/types"
import { Eye, Edit, Trash } from "lucide-react";

interface Props { 
  schema: Schema
}

const Fields = (props: Props) => {

  const {schema: {fields}} = props

  return (
    <thead>
      <tr className='h-[50px]'>
        {fields
        .sort((a, b) => a.seq - b.seq)
        .filter(({show_in_listing})=>show_in_listing)
        .map(({label},i)=>
          <td 
          key={i}
          className='px-4 h-full text-xs font-semibold border-b border-gray-300'>
            <p className="max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
              {label}
            </p>
          </td>
        )}
        <td colSpan={3} className="px-4 h-full text-xs font-semibold border-b border-gray-300">
          actions
        </td>
      </tr>
    </thead>
  )
}

export default Fields