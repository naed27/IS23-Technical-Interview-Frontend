import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useControlStore } from "../../stores/useControlStore";
import { Data } from "@/lib/types";
import { X } from "lucide-react";
import { useRef } from "react";

interface Props {
  data: Data | null;
}

const ViewCard = ({ data }: Props) => {
  const viewWrapperRef = useRef<HTMLDivElement>(null);
  const { setSelectedDataToView, companies } = useControlStore();

  const gotohome = () => setSelectedDataToView && setSelectedDataToView(null);

  useOnClickOutside(viewWrapperRef, gotohome);

  if (data === null) {
    return null;
  }

  const { fullname, id, company, roles, gender, mobile, description } = data;

  return (
    <div className="fixed inset-0 flex bg-black/80 z-10 min-w-[280px] overflow-y-auto overflow-x-hidden p-5">
      <div
        ref={viewWrapperRef}
        className="flex flex-col h-full max-h-[300px] bg-background w-full max-w-[550px] items-center justify-center p-3 pb-7 pt-3 rounded-lg m-auto"
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
          <div>
            <strong>ID:</strong> {id || 'N/A'}
          </div>
          <div>
            <strong>Full Name:</strong> {fullname || 'N/A'}
          </div>
          <div>
            <strong>Company:</strong> {companies[company] || 'N/A'}
          </div>
          <div>
            <strong>Roles:</strong> {roles.join(", ") || 'N/A'}
          </div>
          <div>
            <strong>Gender:</strong> {gender || 'N/A'}
          </div>
          <div>
            <strong>Self - Description:</strong> {description || 'N/A'}
          </div>
          <div>
            <strong>Phone:</strong> {mobile || 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;