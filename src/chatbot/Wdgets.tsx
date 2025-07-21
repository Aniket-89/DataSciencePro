export const CustomWidget = ({ actions }: any) => {
  const handleOption = (option: string) => {
    actions.handleUserChoice(option);
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      <button onClick={() => handleOption("know_more")} className="btn">
        📌 Know more about us
      </button>
      <button onClick={() => handleOption("industries")} className="btn">
        🏭 What industries we deal with
      </button>
      <button onClick={() => handleOption("project")} className="btn">
        📁 Do you have a project for us?
      </button>
      <button onClick={() => handleOption("talk")} className="btn">
        👨‍💼 Talk to our executive
      </button>
    </div>
  );
};
