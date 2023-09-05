import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useControlStore } from "../../stores/useControlStore";
import { X } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { toastError } from "../../lib/utils";

const DeleteConfirmer = () => {
  const deleteWrapperRef = useRef<HTMLDivElement>(null);
  const { selectedDataToDelete, setSelectedDataToDelete, deleteData } = useControlStore();

  const gotohome = () => setSelectedDataToDelete && setSelectedDataToDelete(null);

  useOnClickOutside(deleteWrapperRef, gotohome);

  if (!selectedDataToDelete) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex bg-black/80 z-10 min-w-[280px] overflow-y-auto overflow-x-hidden p-5">
      <div
        ref={deleteWrapperRef}
        className="flex flex-col h-full max-h-[150px] bg-background w-full max-w-[550px] items-center justify-center p-3 pb-7 pt-3 rounded-lg m-auto"
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

        <div className="h-full w-full flex flex-col items-center justify-center gap-4">
          Are you sure you want to delete this item?
          <div className="w-full flex flex-row justify-center items-center gap-4"> 
            <Button variant={'outline'} onClickCapture={gotohome}>
              No
            </Button>
            <Button variant={'destructive'} onClick={()=>{
              deleteData(selectedDataToDelete.id)
              gotohome()
              toastError('','Data has been deleted!')
            }}>
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmer;