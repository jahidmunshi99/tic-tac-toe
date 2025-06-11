const History = ({ value }) => {
  return (
    <div className="history-page w-[250px] bg-gray-50/10">
      <h1 className="text-center text-xl font-bold my-2">Game History</h1>
      <ol className="px-5 py-2">{value}</ol>
    </div>
  );
};

export default History;
