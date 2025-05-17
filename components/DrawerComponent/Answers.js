const Answers = () => {
  return (
    <div className="w-full">
      <div className="p-2 flex flex-col  divide-y divide-dashed w-full overflow-x-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-2 py-2 overflow-x-hidden">
            <div className="w-2 h-2 rounded-full bg-primaryColor mt-1.5"></div>
            <div className="flex-1 w-full">
              <h3 className="text-sm text-headerColor font-medium">
                What is your name?
              </h3>
              <p className="text-sm text-textColor">
                My name is sheikh saadi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio autem voluptates expedita ipsum,
                eum fuga praesentium atque inventore nobis perspiciatis?{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answers;
