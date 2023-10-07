const Subscribe = () => {
  return (
    <div className="flex gap-10 justify-between items-center max-lg:flex-col max-container">
      <h3 className="text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="example@mail.com"
          className="input"
        />
        <button className="font-montserrat max-sm:w-full text-lg leading-none text-white rounded-full bg-coral-red border border-coral-red px-7 py-4">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Subscribe;
