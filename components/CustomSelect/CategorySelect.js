import Image from "next/image";
import icon from "../../app/assets/icons/react icon.svg";
import icon2 from "../../app/assets/icons/total cv 2.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CategorySelect = ({ field }) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger
        className={"w-full px-3 py-2.5 rounded-lg text-sm hover:outline-1"}
      >
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"1"}>
            <div className="flex items-center gap-2">
              <Image src={icon} alt="icon" className="w-5 py-0.5" />
              Web developer
            </div>
          </SelectItem>
          <SelectItem value={"2"}>
            <div className="flex items-center gap-2">
              <Image src={icon2} alt="icon" className="w-5 py-0.5" /> Web
              developer 2
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
