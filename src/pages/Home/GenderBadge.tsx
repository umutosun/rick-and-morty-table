const GenderBadge = ({ gender }: { gender: string }) => {
  if (!gender) return <>!Error</>;

  let bgColorClass = "";
  let textColorClass = "";

  if (gender === "Male") {
    bgColorClass = "bg-customColors-blue200";
    textColorClass = "text-customColors-blue600";
  } else if (gender === "Female") {
    bgColorClass = "bg-customColors-red200";
    textColorClass = "text-customColors-red600";
  } else if (gender === "unknown") {
    bgColorClass = "bg-neutralColors-color500";
    textColorClass = "text-neutralColors-textGray";
  }

  return (
    <div>
      <p
        className={`inline rounded-full py-1 px-3 cursor-pointer text-xs ${bgColorClass} ${textColorClass}`}>
        {gender}
      </p>
    </div>
  );
};

export default GenderBadge;
