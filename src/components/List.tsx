interface ListProps {
  list: string[];
  heading?: boolean;
}

export const List = ({ list, heading }: ListProps) => {
  return (
    <ul className="font-light space-y-2">
      {list.map((item, idx) => (
        <li
          key={`${item}-${idx}`}
          className={`${
            heading && idx === 0 ? "font-semibold text-slate-700 uppercase" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
