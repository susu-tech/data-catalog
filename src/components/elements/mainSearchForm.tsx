type Props = {
  children: string;
};

export const MainSearchForm = (props: Props) => {
  const { children } = props;
  return (
    <form>
      <div className="bg-white px-2 py-1 rounded">
        <div className="flex">
          <input
            type="search"
            className="w-96 mr-1 focus:outline-0"
            placeholder={children}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};
