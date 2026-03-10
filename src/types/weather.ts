export type WeatherData = {
  name: string;

  main: {
    temp: number;
    humidity: number;
  };

  weather: {
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };
};

type ForecastItem = {
  main: {
    temp: number
  },

  weather:
    {
      main: string,
      description: string
    }[],

  dt_txt: string
}

export type ForecastData = {
 list: ForecastItem[];
}