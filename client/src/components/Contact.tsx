const Contact = () => {
  return (
    <div className="bg-[#EDE8F5] rounded-lg p-6">
      <h1 className="text-3xl font-bold text-[#3D52A0] text-center mb-8">
        Contact Us
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-[#3D52A0] mb-6">Get in Touch</h2>
        
        <div className="space-y-6 text-black">
          <div>
            <h3 className="font-medium">Email</h3>
            <p>info@taidepajataikapaita.fi</p>
          </div>
          
          <div>
            <h3 className="font-medium">Location</h3>
            <p>Tampere, Finland</p>
          </div>
          
          <div>
            <h3 className="font-medium">Business Hours</h3>
            <p>Monday - Friday: 9:00 - 17:00</p>
            <p>Saturday: By appointment</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 