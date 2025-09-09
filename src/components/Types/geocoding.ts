export interface GeoResult {
  id?: number;
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  timezone?: string;
  admin1?: string;
}

export interface GeoResponse {
  results?: GeoResult[];
}