const Workshops = () => {
  return (
    <div className="space-y-6 bg-[#EDE8F5] rounded-lg p-6">
      <h1 className="text-3xl font-bold text-[#3D52A0] text-center mb-8">
        Our Workshops
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#7091E6]">
          <h2 className="text-xl font-semibold text-[#3D52A0] mb-3">T-paita paja</h2>
          <p className="text-black">
            Our most popular workshop where children create artwork that we transform into wearable memories on high-quality t-shirts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#7091E6]">
          <h2 className="text-xl font-semibold text-[#3D52A0] mb-3">Creative Sessions</h2>
          <p className="text-black">
            Regular art sessions where children can explore their creativity through various mediums and techniques.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Workshops; 