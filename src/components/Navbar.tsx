const Navbar = () => {
  return (
    <header className="pt-8 mb-20 w-full border-b-4 border-black">
      <div className="flex">
        <div className="flex grow font-bold text-lg py-2">PrabhjotSumman</div>
        <div className="space-x-2">
          {/* <button className="bg-white text-black border px-4 py-2 font-semibold">
            Linkedin
          </button> */}
          <a
            className="bg-black text-white px-4 py-2 font-semibold"
            href="http://www.linkedin.com/in/prabhjotsumman/"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
