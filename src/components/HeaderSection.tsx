const HeaderSection = () => {
  return (
    <div>
      <h1 className="text-slate-900 text-5xl font-medium text-left">
        I build apps and websites <br /> for early-stage companies{" "}
      </h1>
      <p className="text-slate-700 text-2xl flex items-center gap-x-2 py-2">
        From Concept to Code in Weeks, Not Months{" "}
      </p>
      <div className="text-slate-600 flex items-center gap-x-2">
        • Technical co-pilot for ambitious founders
      </div>
      <div className="text-slate-600 flex items-center gap-x-2">
        • Custom-built, scalable applications that users love
      </div>
      <div className="text-slate-600 flex items-center gap-x-2">
        • collaboration, no agency overhead
      </div>
      <div className="text-slate-600 flex items-center gap-x-2">
        • Launch-ready applications in weeks
      </div>
      <div className="text-slate-600 flex items-center gap-x-2">
        • User-focused design + scalable{" "}
      </div>

      <div className="py-4 space-x-2">
        <a
          className="bg-black text-white border px-4 py-2 font-semibold"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/prabhjotsumman/"
        >
          Linkedin
        </a>
        {/* <button className="bg-black text-white px-4 py-2 font-semibold">
          Resume
        </button> */}
      </div>
    </div>
  );
};

export default HeaderSection;
