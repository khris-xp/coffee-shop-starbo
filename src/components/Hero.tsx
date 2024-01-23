const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-starGreen">
      <div className="flex-none md:w-6/12 relative">
        <div className="absolute w-full h-full bg-[url('https://pbs.twimg.com/media/CPCHoNuUcAI5F9v.png')] bg-contain lg:bg-cover lg:bg-center"></div>
      </div>
      <img
        src="https://pbs.twimg.com/media/CPCHoNuUcAI5F9v.png"
        className="lg:hidden"
      />
      <div>
        <div className="p-10 sm:p-24 mx-12 text-center">
          <p className="text-[50px] font-bold">
            Sign up for Starbucks® Rewards
          </p>
          <p className="text-[24px]">
            Starting 4/22, get 25 Stars when you bring your clean, reusable cup
            into the café. Stars can quickly add up to Rewards.*
          </p>
          <button className="hover:bg-slate-50 border-solid border-black border-2 rounded-full px-5 py-1 mt-2 text-center font-bold">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
