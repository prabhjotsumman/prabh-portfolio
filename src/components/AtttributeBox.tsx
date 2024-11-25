const AttributeBox = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="w-7/12 h-40 bg-black border p-4 drop-shadow-sm">
          <p className="text-xl font-bold text-white">Shared ownership</p>
          <p className="text-slate-300 pt-1">
            I work independently and with team as well
          </p>
        </div>
        <div className="w-full h-40 border p-4 drop-shadow-sm">
          <p className="text-xl font-bold">Shared ownership</p>
          <p className="text-slate-700">
            I work independently and with team as well
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <div className="w-10/12 h-40 border p-4  drop-shadow-sm">
          <p className="text-xl font-bold">Shared ownership</p>
          <p className="text-slate-700">
            I work independently and with team as well
          </p>
        </div>
        <div className="h-40 w-full border p-4 bg-black drop-shadow-sm">
          <p className="text-xl text-white font-bold">Shared ownership</p>
          <p className="text-slate-300">
            I work independently and with team as well
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttributeBox;
