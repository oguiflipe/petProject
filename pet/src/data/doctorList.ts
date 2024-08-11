import { ImageProps } from "react-native";

export interface Doctors {
    name: string;
    image: ImageProps["source"];
    avaliable: string;
    dog: ImageProps["source"];
    cat: ImageProps["source"];
    distance: string;
    services: string;
}

const doctor1 = require("../assets/dr_1.jpg");
const doctor2 = require("../assets/dr_2.jpg");
const doctor3 = require("../assets/dr_2.jpg");
const doctor4 = require("../assets/dr_2.jpg");


const dogImage = require("../assets/logo/logo_dog.png")
const catImage = require("../assets/logo/logo_cat.png")

export const doctorList: Doctors[] = [
    {
        name: "Jones",
        image: doctor1,
        avaliable: "Atua com",
        dog: dogImage,
        cat: catImage,
        distance: "10km",
        services: "Vacina e Cirurgia"
    },
    {
        name: "Ana",
        image: doctor2,
        avaliable: "Atua com",
        dog: dogImage,
        cat: "",
        distance: "15km",
        services: "Vacina e Cirurgia"
    },
    {
        name: "Guilherme",
        image: doctor3,
        avaliable: "Atua com",
        dog: dogImage,
        cat: catImage,
        distance: "10km",
        services: "Vacina e Cirurgia"
    },
    {
        name: "Renato",
        image: doctor4,
        avaliable: "Atua com",
        dog: dogImage,
        cat: catImage,
        distance: "15km",
        services: "Vacina e Cirurgia"
    },
];