const CustomInput = ({ id, label, required, disabled, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-headerColor text-sm font-semibold ">
        Title
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type="text"
        id="title"
        disabled={disabled}
        placeholder="Ex: Project Manager"
        className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor placeholder:font-publicSans placeholder:text-sm"
        {...props}
      />
    </div>
  );
};

export default CustomInput;
