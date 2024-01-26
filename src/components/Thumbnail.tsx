const Thumbnail = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-darkGreen text-white my-8">
      <div>
        <div className="p-10 sm:p-24 mx-12 text-center">
          <p className="text-[50px] font-bold">Taste of tomorrow</p>
          <p className="text-[24px]">
            The trailblazing Starbucks Odyssey Blend™ boldly envisions a more
            sustainable future for the coffee industry.
          </p>
          <button className="hover:bg-slate-50 duration-300 hover:text-black border-solid border-white border-2 rounded-full px-5 py-1 mt-2 text-center font-bold">
            Learn how
          </button>
        </div>
      </div>

      <div className="flex-none md:w-6/12 relative">
        <div className="absolute w-full h-full bg-[url('https://assets.brandinside.asia/uploads/2020/06/shutterstock_1237944661.jpg')] bg-contain lg:bg-cover lg:bg-center"></div>
      </div>
      <img
        src="https://assets.brandinside.asia/uploads/2020/06/shutterstock_1237944661.jpg"
        className="lg:hidden"
      />
    </div>
  );
};

export default Thumbnail;
