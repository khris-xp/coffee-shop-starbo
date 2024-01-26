const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-darkGreen my-8 text-white">
        <div className="flex-none md:w-6/12 relative">
          <div className="absolute w-full h-full bg-[url('https://media.cnn.com/api/v1/images/stellar/prod/200526153607-starbucks-coffee.jpg?q=w_1600,h_900,x_0,y_0,c_fill')] bg-contain lg:bg-cover lg:bg-center"></div>
        </div>
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/200526153607-starbucks-coffee.jpg?q=w_1600,h_900,x_0,y_0,c_fill"
          className="lg:hidden"
        />
        <div>
          <div className="p-10 sm:p-24 mx-12 text-center">
            <p className="text-[50px] font-bold">Iced shaken awakening</p>
            <p className="text-[24px]">
              Introducing our new Iced Toasted Vanilla Oatmilk Shaken Espresso
              with rich, creamy layers and nondairy goodness.
            </p>
            <button className="hover:bg-slate-50 duration-300 hover:text-black border-solid border-white border-2 rounded-full px-5 py-1 mt-2 text-center font-bold">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
