const Navbar = () => {
  return (
    <header className="pt-8 mb-20 w-full border-b-4 border-black">
      <div className="flex">
        <a href="/" className="flex grow font-bold text-lg py-2">
          PrabhjotSumman
        </a>
        <div className="space-x-2">
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
