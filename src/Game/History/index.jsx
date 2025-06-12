const History = ({ value }) => {
  return (
    <div className=" bg-amber-50/10 my-5 w-[250px] rounded-5">
      <div className="p-3">
        <div className="text-xl text-white text-center mb-5">History</div>
        <ol>{value}</ol>
      </div>
    </div>
  );
};

export default History;
