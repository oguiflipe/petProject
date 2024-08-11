import { ImageProps } from "react-native";

export interface PetsExams {
  name: string;
  image: ImageProps["source"];
  raca: string;
  dateExame: string;
  timeExame: string;
  procedure: string;
}

const cachorro = require("../assets/cachorro.jpg");
const cachorro2 = require("../assets/cachorro2.jpg");
const cachorro3 = require("../assets/cachorro3.jpg");
const gato = require("../assets/gato.jpg");

export const petsExam: PetsExams[] = [
  {
    name: "Roberto",
    raca: "Golden",
    procedure: "Vacina",
    dateExame: "24/03/2024",
    timeExame: "14:00",
    image: cachorro
  },
  {
    name: "Claudio",
    raca: "Salsisha",
    procedure: "Banho e Tosa",
    dateExame: "27/03/2024",
    timeExame: "15:40",
    image: cachorro2
  },
  {
    name: "Berenice",
    raca: "Vira-Lata",
    procedure: "Vacina",
    dateExame: "27/03/2024",
    timeExame: "16:00",
    image: cachorro3
  },
  {
    name: "Romário",
    raca: "Vira-Lata",
    procedure: "Vacina",
    dateExame: "27/03/2024",
    timeExame: "16:30",
    image: gato
  },
];
