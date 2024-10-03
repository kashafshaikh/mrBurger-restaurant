
export default function About() {
  return (
    <section>
      <div className="text-white relative top-[100px] px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl text-center text-yellow-400 font-bold mb-[50px] md:mb-[100px]">
          ABOUT <span className="text-white">US</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[500px] w-full gap-8 lg:gap-12">
          
          <div className="flex justify-center lg:justify-end lg:pr-[30px]">
            <img
              src="/broast.jpg"
               alt="Crispy Broast"
              className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full sm:w-[80%] md:w-[70%] lg:w-[90%] object-cover shadow-2xl"
            />
          </div>

          <div className="bg-zinc-950 shadow-2xl p-6 lg:p-8">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-6">
              What Makes<span className="text-yellow-400"> Our Food Special?</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] mt-4 md:mt-6 font-semibold">
              Welcome to our restaurant! We pride ourselves on offering a unique dining experience with dishes made from the freshest ingredients. Our chefs work tirelessly to bring authentic flavors to every plate, ensuring that each bite is a delightful experience. <br />
              Whether you&apos;re enjoying a classic pizza or one of our specialty dishes, we guarantee you&apos;ll  leave satisfied and eager to return. Join us for a meal that will tantalize your taste buds and warm your heart.
            </p>
            <button className="bg-yellow-600 mt-6 md:mt-8 px-6 md:px-8 py-2 rounded-md text-[16px] md:text-[18px] font-semibold shadow-lg hover:bg-yellow-800 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="pb-[100px] lg:pb-[150px]"></div>
      </div>
    </section>
  );
}
