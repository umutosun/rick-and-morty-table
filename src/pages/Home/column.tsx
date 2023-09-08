import StatusBadge from "./StatusBadge";

export const columns = [
  {
    accessorKey: "gender",
    header: "gender",
    cell: (info: any) => {
      return <p>{info.getValue()}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "name",
    cell: (info: any) => {
      return (
        <p className=" flex items-center ">
          <img
            src={info.row.original.image}
            className="w-10 rounded-full inline ml-7"
            alt="characters"
          />
          <p className="inline ml-4 text-sm ">{info.getValue()}</p>
        </p>
      );
    },
  },
  {
    accessorKey: "id",
    header: "id",
    cell: (info: any) => <>{info.getValue()}</>,
  },
  {
    accessorKey: "species",
    header: "species",
    cell: (info: any) => <>{info.getValue()}</>,
  },
  {
    accessorKey: "status",
    header: "status",
    cell: (info: any) => <StatusBadge status={info.getValue()} />,
  },
];
