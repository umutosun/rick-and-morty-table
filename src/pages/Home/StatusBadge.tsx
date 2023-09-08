const StatusBadge = ({ status }: { status: string }) => {
  if (!status) return <>!Error</>;

  let bgColorClass = "";
  let textColorClass = "";

  if (status === "Alive") {
    bgColorClass = "bg-customColors-green100";
    textColorClass = "text-customColors-green600";
  } else if (status === "unknown") {
    bgColorClass = "bg-neutralColors-color500";
    textColorClass = "text-neutralColors-textGray";
  } else if (status === "Dead") {
    bgColorClass = "bg-customColors-red200";
    textColorClass = "text-customColors-red600";
  }

  return (
    <div>
      <p
        className={`inline rounded-full py-1 px-3 cursor-pointer text-xs ${bgColorClass} ${textColorClass}`}>
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;
