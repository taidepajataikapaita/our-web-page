import { Button } from '@/components/ui/button';

const Workshops = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen p-6">
      {/* Logo Section */}
      <div className="w-full max-w-md mb-8 flex justify-center">
        <img
          src="/logo.svg"
          alt="Taidepaja Taikapaita Logo"
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Main Title */}
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        Apply for Wine & Art Sessions!
      </h1>

      {/* Event Details */}
      <div className="w-full max-w-2xl mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
          <div className="flex flex-col">
            <p className="text-gray-800 mb-1">Ilmoittaudu tulevaan Wine & Art Tapahtumaan</p>
            <p className="text-gray-600 text-sm mb-4">Author</p>

            {/* Image of people painting outdoors */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="/kuva1.svg"
                alt="People painting outdoors"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Calendar Image */}
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img
              src="/tammikuu.svg"
              alt="Calendar showing available dates"
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Sessions For Companies Section */}
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Sessions for companies
      </h2>

      {/* Contact Information */}
      <div className="text-center mb-12">
        <p className="text-xl font-medium">Contact: 0405160102</p>
      </div>

      {/* Apply Button */}
      <Button className="bg-[#FF5CBF] text-white hover:bg-[#FFB6D2] hover:text-[#0074D9] font-semibold px-8 py-6 text-lg rounded-md">
        Apply Now
      </Button>
    </div>
  );
};

export default Workshops;