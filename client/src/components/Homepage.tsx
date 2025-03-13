import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center bg-[#EDE8F5] rounded-lg p-6">
      <h1 className="text-4xl font-bold text-[#3D52A0] mb-6">
        {t('welcome')}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-[#7091E6] mb-6 leading-relaxed font-semibold">
          {t('we-are')}
        </p>
        <div className="text-black space-y-4 font-medium">
          <p>
            {t('about-us-details-1')}
          </p>
          <p>
            {t('about-us-details-2')}
          </p>
          <p>
            {t('about-us-details-3')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;