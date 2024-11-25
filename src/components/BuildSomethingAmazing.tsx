const BuildSomethingAmazing = () => {
  return (
    <div className="mt-10 py-20 mb-20 border border-b-4 border-b-black  text-center">
      <h3 className="text-2xl sm:text-5xl font-bold">
        Ready to Build Something <br />
        Amazing?
      </h3>
      <p className="text-normal text-slate-500 p-4">
        Contact me and We can work together!
      </p>
      <div className="space-x-2">
        {/* <button className="bg-white text-black border px-4 py-2 font-semibold">
          Linkedin
        </button> */}
        <a
          className="bg-black text-white px-4 py-2 font-semibold"
          href="https://www.linkedin.com/in/prabhjotsumman/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default BuildSomethingAmazing;
