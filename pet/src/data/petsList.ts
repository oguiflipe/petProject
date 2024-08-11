import { ImageProps } from "react-native";

export interface PetsList {
    name: string;
    image: ImageProps["source"];
    raca: string;
}

const cachorro = require("../assets/cachorro.jpg");
const cachorro2 = require("../assets/cachorro2.jpg");
const cachorro3 = require("../assets/cachorro3.jpg");
const gato = require("../assets/gato.jpg");



export const petList: PetsList[] = [
    {
        name: "Roberto",
        image: cachorro,
        raca: "Golden",
    },
    {
        name: "Claudio",
        image: cachorro2,
        raca: "Dachshund",
    },
    {
        name: "Berenice",
        image: cachorro3,
        raca: "Vira-Lata",
    },
    {
        name: "Romário",
        image: gato,
        raca: "Vira-Lata",
    },
];