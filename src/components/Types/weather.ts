export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
  relativehumidity?: number;
}

export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m?: number[];
  precipitation_probability?: number[];
}

export interface DailyWeather {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max?: number[];
}

export interface WeatherBundle {
  current: CurrentWeather;
  hourly: HourlyWeather;
  daily: DailyWeather;
  units: {
    temp: string;
  };
  latitude: number;
  longitude: number;
  resolvedName: string;
}