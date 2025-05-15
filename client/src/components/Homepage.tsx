import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homepage = () => {
  const [hoverTshirt, setHoverTshirt] = useState(false);
  const [hoverTeam, setHoverTeam] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white w-full p-8 md:py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0074D9] mb-6">
                Taidepaja Taikapaita
              </h1>
              <Button asChild className="bg-[#FF5CBF] text-white hover:bg-[#FFB6D2] hover:text-[#0074D9] font-semibold px-8 py-6 text-lg rounded-md">
                <Link to="/t-shirt">Get a T-shirt!</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-16 -right-16 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#FF5CBF] flex items-center justify-center text-white text-center p-4 font-bold transform rotate-12">
                  <span>Taidepaja Taikapaita</span>
                </div>
                <img
                  src="/logo.svg"
                  alt="Taidepaja Taikapaita Logo"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Our Story Box - Smaller with bigger text */}
          <div className="bg-[#6E7B8B] p-6 rounded-lg shadow-lg flex items-center justify-center aspect-square">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-center">
              OUR<br />STORY<br />HERE
            </h2>
          </div>

          {/* T-shirt Image with hover effect */}
          <div
            className="relative transition-all duration-300 ease-in-out aspect-square"
            onMouseEnter={() => setHoverTshirt(true)}
            onMouseLeave={() => setHoverTshirt(false)}
          >
            <div className={`h-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${hoverTshirt ? 'shadow-2xl transform scale-105' : ''}`}>
              <img
                src="/t-shirt-frontpage.svg"
                alt="T-shirt design"
                className="w-full h-full object-contain bg-white p-4"
              />
              {hoverTshirt && (
                <div className="absolute bottom-0 right-0 w-full flex items-end justify-end p-2">
                  <div className="text-[#FF5CBF] text-xl font-bold transform rotate-12">
                    <span className="bg-white px-2 py-1 rounded-full shadow-lg">
                      TAIDE T-PAIDASSA!
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Team Image with hover effect */}
          <div
            className="relative transition-all duration-300 ease-in-out aspect-square"
            onMouseEnter={() => setHoverTeam(true)}
            onMouseLeave={() => setHoverTeam(false)}
          >
            <div className={`h-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${hoverTeam ? 'shadow-2xl transform scale-105' : ''}`}>
              <img
                src="/team-picture.svg"
                alt="Our team"
                className="w-full h-full object-contain bg-white"
              />
              {hoverTeam && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-[#FF5CBF] text-xl font-bold transform -rotate-12">
                    <span className="bg-white px-3 py-1 rounded-full shadow-lg">
                      TAIDEPAJA TAIKAPAITA
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Workshop Details - Full Width Below */}
        <div className="mt-8">
          <div className="bg-[#5A9BD4] rounded-lg shadow-lg p-6">
            <p className="text-white text-lg">
              We are a creative workshop focused on designing and producing unique, artist-designed t-shirts.
              Our team brings together artistic vision with quality materials to create wearable art
              that expresses individuality and creativity.
            </p>
            <Button asChild className="mt-4 bg-[#FFB6D2] text-black hover:bg-white hover:text-[#0074D9]">
              <Link to="/workshops">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* References Section */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-black mb-10 text-left">References</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reference 1 */}
            <div className="flex flex-col h-full">
              <h3 className="font-semibold text-black mb-1">OmYoga</h3>
              <p className="text-gray-600 text-sm mb-3">Joogaa ja Taidettai! Ihana päivä rentoa meininkiä ja taiteilua!</p>
              <div className="rounded-lg overflow-hidden flex-1 bg-[#FFB6D2]">
                <img
                  src="/omyoga1.svg"
                  alt="OmYoga reference"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Reference 2 */}
            <div className="flex flex-col h-full">
              <h3 className="font-semibold text-black mb-1">Touhula Päiväkodit</h3>
              <p className="text-gray-600 text-sm mb-3">Lapset pitustiksesta unihumatun muistot!</p>
              <div className="rounded-lg overflow-hidden flex-1 bg-[#5A9BD4]">
                <img
                  src="/touhula.svg"
                  alt="Touhula Päiväkodit reference"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Reference 3 */}
            <div className="flex flex-col h-full">
              <h3 className="font-semibold text-black mb-1">Mattilan Marjatila</h3>
              <p className="text-gray-600 text-sm mb-3">Elämän (vähynmointielvä Mattilan Marjatilalla: Wine Tasting & Paint</p>
              <div className="rounded-lg overflow-hidden flex-1 bg-[#FFB6D2]">
                <img
                  src="/kuva1.svg"
                  alt="Mattilan Marjatila reference"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;