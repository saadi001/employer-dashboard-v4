const JobStatus = ({ status }) => {
  return (
    <div className="bg-primaryBackground flex items-center gap-1 text-xs font-publicSans text-primaryColor px-2 py-0.5 rounded-full border capitalize h-fit">
      <span className="h-1.5 w-1.5 bg-primaryColor inline-block rounded-full"></span>{" "}
      <span className="inline-block capitalize">{status}</span>
    </div>
  );
};

export default JobStatus;
