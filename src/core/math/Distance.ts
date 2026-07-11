import { Units } from "@/core/constants";

export function auToKm(value: number): number {
  return value * Units.AstronomicalUnit;
}

export function lightYearToKm(value: number): number {
  return value * Units.LightYear;
}