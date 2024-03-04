
import banner from'./../Banner/bimg.jpg'
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-green-300 rounded-lg mb-7">
        <div className="hero-content p-10 ml-10 flex-col lg:flex-row">
          <img
        src={banner}
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
          <div className="ml-7">
            <h1 className="text-5xl font-bold text-green-500">Explore More.....</h1>
            <p className="py-6 font-bold w-full">
              Our 2024 efforts are focused on bringing the service to those who
              need it while defending it from threatening forces so that
              everyone can access the opportunities it brings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
