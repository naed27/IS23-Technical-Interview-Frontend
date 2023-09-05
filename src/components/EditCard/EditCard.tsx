import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useControlStore } from "../../stores/useControlStore";
import { useEditStore } from "../../stores/useEditStore";
import { Data } from "@/lib/types";
import { X } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { Button } from "../ui/Button";
import { toastDefault } from "../../lib/utils";
import DropdownMenu from "../ui/DropdownMenu";

interface Props {
  data: Data | null;
}

const EditCard = ({ data }: Props) => {
  const editWrapperRef = useRef<HTMLDivElement>(null);
  const { setSelectedDataToEdit, updateData, companies } = useControlStore();
  const { query, setQuery , queueQuery } = useEditStore();

  useLayoutEffect(()=>{
    if(!data) return

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id, ...rest} = data
    setQuery(rest)

  },[data, setQuery])

  const gotohome = () => setSelectedDataToEdit && setSelectedDataToEdit(null);

  useOnClickOutside(editWrapperRef, gotohome);

  const submitForm = () => {
    if(!data) return
    updateData(data.id, query)
    gotohome()
    toastDefault('','Data has been updated!')
  }

  if (data === null || companies === null) {
    return null;
  }

  console.log(companies[Number(query.company)])

  return (
    <div className="fixed inset-0 flex bg-black/80 z-10 min-w-[280px] overflow-y-auto overflow-x-hidden p-5">
      <div
        ref={editWrapperRef}
        className="flex flex-col h-full max-h-[500px] bg-background w-full max-w-[550px] items-center justify-center p-3 pb-7 pt-3 rounded-lg m-auto"
      >
        <div className="flex items-center w-full h-4 justify-end">
          <button
            aria-label="close modal"
            onClickCapture={gotohome}
            className="aspect-square h-5 p-0 rounded-md ml-auto"
          >
            <X className="w-full h-full text-foreground" />
          </button>
        </div>

        <div className="w-full p-2 pt-0 flex flex-col h-full gap-2 justify-center items-start text-start">

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="px-2 font-bold">ID:</p> 
            <input 
            disabled={true}
            type="text"
            value={data.id}
            spellCheck="false"
            onChange={()=>{}}
            autoComplete="off"
            className="flex-grow h-full bg-transparent outline-none border border-border p-2"/>
          </div>

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="px-2 font-bold">Full Name:</p> 
            <input 
            type="text"
            spellCheck="false"
            value={query.fullname}
            onChange={(e)=>queueQuery({fullname: e.target.value})}
            autoComplete="off"
            className="flex-grow h-full bg-transparent outline-none border border-border p-2"/>
          </div>

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="px-2 font-bold">Company:</p> 

            <DropdownMenu
            defaultPlaceHolder={companies[query.company]}
            initialValue={companies[query.company]}
            noItemsPlaceholder='No companies'
            onValueChange={(companyId: string)=>queueQuery({company: companyId})}
            defaultSelectedValue={{label:'None', value: '1'}}
            items={Object.entries(companies).map(([id, name]) => ({
              value: id,
              label: name,
            }))}/>

            <input 
            type="text"
            spellCheck="false"
            value={query.company}
            onChange={(e)=>queueQuery({company: e.target.value})}
            autoComplete="off"
            className="flex-grow h-full bg-transparent outline-none border border-border p-2"/>

          </div>

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="px-2 font-bold">Roles</p> 
            <input 
            type="text"
            spellCheck="false"
            value={query.roles.join(', ')}
            onChange={(e)=>queueQuery({roles: e.target.value.split(',')})}
            autoComplete="off"
            className="flex-grow h-full bg-transparent outline-none border border-border p-2"/>
          </div>

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="px-2 font-bold">Gender:</p> 
            <input 
            type="text"
            spellCheck="false"
            value={query.gender}
            onChange={(e)=>queueQuery({gender: e.target.value})}
            autoComplete="off"
            className="flex-grow h-full bg-transparent outline-none border border-border p-2"/>
          </div>

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="px-2 font-bold">Self - Description:</p> 
            <input 
            type="text"
            spellCheck="false"
            value={query.description}
            onChange={(e)=>queueQuery({description: e.target.value})}
            autoComplete="off"
            className="flex-grow h-full bg-transparent outline-none border border-border p-2"/>
          </div>

          <div className="flex flex-row w-full gap-1 items-center">
            <p className="px-2 font-bold">Phone:</p> 
            <input 
            type="text"
            spellCheck="false"
            value={query.mobile}
            onChange={(e)=>queueQuery({mobile: e.target.value})}
            autoComplete="off"
            className="flex-grow h-full bg-transparent outline-none border border-border p-2"/>
          </div>

        </div>
        <div className="flex flex-row gap-2 justify-end w-full">
          <Button variant={'subtle'} onClick={gotohome}>
            Cancel
          </Button>
          <Button onClick={submitForm}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;