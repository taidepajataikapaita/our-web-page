const Contact = () => {
  return (
    <div className="bg-[#EDE8F5] rounded-lg p-6">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#3D52A0] text-center mb-8">
          Contact Us
        </h1>

        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-[#EDE8F5] p-6 rounded-lg border-2 border-[#7091E6] transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-[#3D52A0] mb-2">Email</h3>
              <a
                href="mailto:info@taidepajataikapaita.fi"
                className="text-[#7091E6] hover:text-[#3D52A0] transition-colors"
              >
                info@taidepajataikapaita.fi
              </a>
            </div>

            <div className="bg-[#EDE8F5] p-6 rounded-lg border-2 border-[#7091E6] transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-[#3D52A0] mb-2">Location</h3>
              <p className="text-black">
                Tampere, Finland
              </p>
            </div>
          </div>

          <div className="bg-[#EDE8F5] p-6 rounded-lg border-2 border-[#7091E6] mt-8">
            <h3 className="text-lg font-semibold text-[#3D52A0] mb-4">Business Hours</h3>
            <div className="space-y-2 text-black">
              <div className="flex justify-between items-center border-b border-[#7091E6] pb-2">
                <span className="font-medium">Monday - Friday</span>
                <span>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#7091E6] pb-2">
                <span className="font-medium">Saturday</span>
                <span>By appointment</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Optional: Add a map or additional contact information */}
          <div className="bg-[#EDE8F5] p-6 rounded-lg border-2 border-[#7091E6] mt-8">
            <h3 className="text-lg font-semibold text-[#3D52A0] mb-2">Additional Information</h3>
            <p className="text-black">
              For workshop bookings and special inquiries, please contact us via email.
              We aim to respond within 24 business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;