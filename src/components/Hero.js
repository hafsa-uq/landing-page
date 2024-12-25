import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='bg-gray-200'>
      <main className="flex flex-col items-center justify-center px-6 bg-gray-200 md:px-16 text-center pt-14 space-y-8 mt-9">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1C244B] leading-tight">
          Connect Every Action to Revenue
          <br />
          <span className="block mt-4">Growth on Amazon</span>
        </h1>

        <p className="text-gray-700 text-lg sm:text-xl max-w-lg mx-auto">
          The unified platform that tracks, measures, and optimizes every move
          you make on Amazon.
        </p>

        <div>
          <Link to = "pricing" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            SEE OUR PRICING
          </Link>
        </div>
      </main>

      <section className="bg-gray-200 pb-0 bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C244B] mt-10 sm:mt-20 text-center leading-tight">
    Transform your Amazon business with complete <br /> visibility into what works
  </h1>

  <img
    src="/images/hero.png" 
    alt="Hero Image"
    className="w-full max-w-4xl h-auto mt-8 rounded-lg shadow-lg"
  />
</section>

    </div>
  );
};

export default Hero;
