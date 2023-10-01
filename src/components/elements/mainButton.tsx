type Props = {
  children: string;
};

export const MainButton = (props: Props) => {
  const { children } = props;
  return (
    <button className="bg-white px-2 py-1 rounded text-sm hover:bg-stone01">
      {children}
    </button>
  );
};
