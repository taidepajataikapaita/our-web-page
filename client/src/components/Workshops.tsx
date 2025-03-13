import { useTranslation } from "react-i18next";

const Workshops = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 bg-[#EDE8F5] rounded-lg p-6">
      <h1 className="text-3xl font-bold text-[#3D52A0] text-center mb-8">
        Our Workshops
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#7091E6]">
          <h2 className="text-xl font-semibold text-[#3D52A0] mb-3">
            {t('workshop-t-shirt-title')}
          </h2>
          <p className="text-black">
            {t('workshop-t-shirt-details')}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#7091E6]">
          <h2 className="text-xl font-semibold text-[#3D52A0] mb-3">
            {t('workshop-creative-session')}
          </h2>
          <p className="text-black">
            {t('workshop-creative-details')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Workshops;