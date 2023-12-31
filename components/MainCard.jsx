import Image from "next/image";
import { ctoF } from "@/components/helpers";
import styles from "./main.module.css";
import { DateTime } from "@/components/DateTime";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  weatherData,
}) => {
  return (
    <div className={styles.cardwrapper}>
      <DateTime weatherData={weatherData} />
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
          width={125}
          height={125}
          src={`https://openweathermap.org/img/wn/${iconName}@2x.png`}
          alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
            {Math.round(weatherData.main.temp)}
            °{"C"} | {
            Math.round(ctoF(weatherData.main.temp))}
            °{"F"}
      </h1>
      <p>
        Feels like{" "}
            {Math.round(weatherData.main.feels_like)}
            °{"C"} | {
            Math.round(ctoF(weatherData.main.feels_like))}
            °{"F"}
      </p>
    </div>
  );
};