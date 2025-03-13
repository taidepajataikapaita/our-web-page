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
            {t('about-us-details')}
          </p>
          <p>
            Yrittäjähenkisinä opiskelijoina uskomme vahvasti siihen, että lasten luovuuden kannustaminen ja kyky ilmaista itseään taiteellisten aktiviteettien kautta on äärimmäisen tärkeää. Suosituin tapahtumamme, "T-paita paja", innostaa lapset luomaan taideteoksia paperille, jotka skannaamme ja muunnamme korkealaatuisiksi grafiikoiksi. Nämä tulostetaan ammattimaisesti suoraan premium-laatuisille puuvillaisille T-paidoille, tehden jokaisesta teoksesta puettavan.
          </p>
          <p>
            Se, että näkee vanhemman ylpeästi käyttävän T-paitaa, jossa on lapsensa taideteos, voi syvästi vahvistaa lapsen itsetuntoa. Samalla on erittäin merkityksellistä, että lapsi voi ilmaista itseään päivittäin pukeutumalla paitaan, joka esittelee hänen omaa luomustaan. Siksi tarjoammekin paitoja joka koossa– jotta jokainen nuori taiteilija voi ylpeästi kantaa omaa ainutlaatuista visiotaan!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;