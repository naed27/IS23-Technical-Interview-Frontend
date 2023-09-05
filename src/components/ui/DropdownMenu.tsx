"use client"

import { ScrollArea } from "./ScrollArea"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import { cn } from "../../lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import { HTMLAttributes, useEffect, useRef, useState } from "react"

type Item = { label: string, value: string }

interface Props extends HTMLAttributes<HTMLElement>{
  noItemsPlaceholder: string,
  defaultPlaceHolder?: string,
  items: Item[],
  initialValue: string,
  defaultSelectedValue?: Item,
  disabled?: boolean,
  // eslint-disable-next-line no-unused-vars
  onValueChange: (newValue: string) => void
}

const DropdownMenu = ({
  onValueChange,
  initialValue,
  defaultPlaceHolder,
  items,
  noItemsPlaceholder,
  className,
  defaultSelectedValue,
  disabled = false
}: Props) => {

  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(initialValue);

  useOnClickOutside(ref,()=>setOpen(false))

  const handleValueChange = (newValue: string) => {
    const valueHolder = newValue === selectedValue ? defaultSelectedValue?.value || '' : newValue
    setSelectedValue(valueHolder)
    onValueChange(valueHolder);
    setOpen(false)
  };

  useEffect(()=>{
    setSelectedValue(initialValue)
  },[initialValue])

  const noPlaceHolder = defaultPlaceHolder === "" || defaultPlaceHolder?.length === 0
  const selectedItem = selectedValue && items.find((item) => item.value === selectedValue)

  return (
    <div 
    ref={ref}
    className={cn(
      "relative w-full select-none",
      disabled ? 'pointer-events-none text-muted-foreground opacity-50' : 'pointer-events-auto',
      className,
    )}>
      <p className="opacity-0 px-2 py-2">a</p>

      <div
      className={cn('absolute inset-0', open&&'z-[20]')}>
        <div className="w-full rounded-sm h-auto flex flex-col items-center justify-center bg-accent border border-border">
          
          <button 
          disabled={disabled}
          onClick={()=>setOpen((current)=>!current)} 
          className="w-full rounded-sm flex flex-row justify-center items-center pl-2 pr-1 gap-1 text-start ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-[2.5px] cursor-default disabled:cursor-not-allowed">
            <p className={cn("w-full h-full overflow-x-hidden whitespace-nowrap text-ellipsis py-2",noPlaceHolder&&!selectedItem&&'opacity-0')}>
              {selectedItem&&selectedItem.label || defaultPlaceHolder || 'Choose..'}
            </p>
            <ChevronsUpDown className="w-[14px] h-[14px] min-w-[14px] min-h-[14px]"/>
          </button>

          {open&&<hr className="w-full border-border"/>}

          {open&&(
            <ScrollArea className="w-full flex flex-col justify-center max-h-[115px] overflow-y-auto rounded-b-sm">
              
              {(selectedItem&&defaultSelectedValue)&&(
                <div 
                key={`item_default`} 
                onClick={() =>handleValueChange(defaultSelectedValue.value)}
                className="w-full flex items-center gap-2 px-2 py-2 hover:bg-accent-hover">
                  <Check 
                  strokeWidth={'2px'} 
                  className='h-[14px] w-[14px] min-w-[14px] min-h-[14px] opacity-0'/>
                  <p className="overflow-x-hidden whitespace-nowrap text-ellipsis">
                    {defaultSelectedValue.label}
                  </p>
                </div>
              )}

              {items.length>0 ? items.map((item,i)=>{
                return (
                  <div 
                  key={`id_${item.label}_${i}`} 
                  onClick={() =>handleValueChange(item.value)}
                  className="w-full flex items-center gap-2 px-2 py-2 hover:bg-accent-hover">
                    <Check 
                    strokeWidth={'2px'} 
                    className={cn(
                      'h-[14px] w-[14px] min-w-[14px] min-h-[14px]',
                      selectedValue === item.value ? "opacity-100" : "opacity-0",
                    )}/>
                    <p className="overflow-x-hidden whitespace-nowrap text-ellipsis">
                      {item.label}
                    </p>
                  </div>
                )
              }):
              (
                <div className="w-full flex items-center gap-2 px-2 py-2">
                  {noItemsPlaceholder}
                </div>
              )}
            </ScrollArea>
          )}
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu