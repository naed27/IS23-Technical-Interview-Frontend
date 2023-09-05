import { Data, Schema } from "@/lib/types";
import { useControlStore } from "../../../stores/useControlStore";
import { Eye, Edit, Trash } from "lucide-react";
import { cn } from "../../../lib/utils";

interface Props {
  item: Data & {isDeleted: boolean}
  schema: Schema;
}

const Item = (props: Props) => {
  const { schema: { fields }, item } = props;

  const sortedFields = fields.sort((a, b) => a.seq - b.seq)
  .filter(({show_in_listing})=>show_in_listing);
  const {setSelectedDataToView, setSelectedDataToEdit, setSelectedDataToDelete, companies} = useControlStore()

  return (
    <tr className={cn(
      "h-[50px] hover:bg-accent",
      item.isDeleted && 'text-border pointer-events-none select-none'
    )}>
      {sortedFields.map(({ key }, i) => (
        <td
        key={i}
        className="relative px-4 h-full text-xs border-b border-gray-300">
          <p className="max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
            {(()=>{
              if(key === 'company') return companies[item[key]]
              return item[key] ||'N/A'
            })()}
          </p>
        </td>
      ))}
      <td className="px-4 h-full text-xs font-semibold border-b border-gray-300">
        <Eye size={16} onClick={(()=>setSelectedDataToView(item))} className="cursor-pointer"/>
      </td>
      <td className="px-4 h-full text-xs font-semibold border-b border-gray-300">
        <Edit size={16} onClick={(()=>setSelectedDataToEdit(item))} className="cursor-pointer"/>
      </td>
      <td className="px-4 h-full text-xs font-semibold border-b border-gray-300">
        <Trash size={16} onClick={(()=>setSelectedDataToDelete(item))} className="cursor-pointer"/>
      </td>
    </tr>
  );
};

export default Item;