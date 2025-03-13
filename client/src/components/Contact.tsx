import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#EDE8F5] rounded-lg p-6">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#3D52A0] text-center mb-8">
          {t('nav-contact')}
        </h1>

        <div className="space-y-8">
          <div className="bg-[#EDE8F5] p-6 rounded-lg border-2 border-[#7091E6] mt-8">
            <h3 className="text-lg font-semibold text-[#3D52A0] mb-4">{t('contact-contact')}</h3>
            <div className="space-y-2 text-black">
              <div className="flex justify-between items-center border-b border-[#7091E6] pb-2">
                <span className="font-medium">{t('contact-email')}</span>
                <span>
                  <a
                  href="mailto:info@taidepajataikapaita.fi"
                  className="text-[#7091E6] hover:text-[#3D52A0] transition-colors"
                  >
                  info@taidepajataikapaita.fi
                  </a>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-[#7091E6] pb-2">
                <span className="font-medium">{t('contact-phonenumber')}</span>
                <span>+358 ...</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">{t('contact-location')}</span>
                <span>Tampere, Finland</span>
              </div>
            </div>
          </div>

          <div className="bg-[#EDE8F5] p-6 rounded-lg border-2 border-[#7091E6] mt-8">
            <h3 className="text-lg font-semibold text-[#3D52A0] mb-4">{t('contact-business-hours')}</h3>
            <div className="space-y-2 text-black">
              <div className="flex justify-between items-center border-b border-[#7091E6] pb-2">
                <span className="font-medium">{t('contact-date-mo-fri')}</span>
                <span>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#7091E6] pb-2">
                <span className="font-medium">{t('contact-date-sat')}</span>
                <span>10.00 - 15.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">{t('contact-date-sun')}</span>
                <span>{t('contact-closed')}</span>
              </div>
            </div>
          </div>

          {/* Optional: Add a map or additional contact information */}
          <div className="bg-[#EDE8F5] p-6 rounded-lg border-2 border-[#7091E6] mt-8">
            <h3 className="text-lg font-semibold text-[#3D52A0] mb-2">{t('contact-additional-info')}</h3>
            <p className="text-black">
              {t('contact-additional-detail')}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;