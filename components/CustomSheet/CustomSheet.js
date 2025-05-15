import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const CustomSheet = ({ open, setOpen }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Applicant Profile</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
