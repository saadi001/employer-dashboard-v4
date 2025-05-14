const JobStatus = ({ status }) => {
  return (
    <div className="bg-primaryBackground flex items-center gap-1 text-xs font-publicSans text-primaryColor px-2 py-0.5 rounded-full border capitalize h-fit">
      <div className="h-2 w-2 bg-primaryColor block rounded-full"></div>
      <div className="inline-block capitalize">{status}</div>
    </div>
  );
};

export default JobStatus;
