const CustomInput = ({
  id,
  type,
  label,
  placeholder,
  required,
  disabled,
  field,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-headerColor text-sm font-semibold ">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type || "text"}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        value={field.value === undefined ? "" : field.value}
        onChange={(e) => field.onChange(e.target.value)}
        className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor placeholder:font-publicSans placeholder:text-sm"
        {...props}
      />
    </div>
  );
};

export default CustomInput;
