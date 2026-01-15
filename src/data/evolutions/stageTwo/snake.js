//placeholder images
import altSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/alt_snake.png";
import brightSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/bright_snake.png";
import confusedSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/confused_snake.png";
import coolSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/cool_snake.png";
import cuteSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/cute_snake.png";
import deepSeaSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/deep_sea_snake.png";
import digitalSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/digital_snake.png";
import floralSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/floral_snake.png";
import freezingSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/freezing_snake.png";
import grossSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/gross_snake.png";
import hauntedSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/haunted_snake.png";
import mouldySnakeImg from "@/assets/pets/evolutions/stageTwo/snake/mouldy_snake.png";
import normalSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/normal_snake.png";
import smokingSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/smoking_snake.png";
import soakedSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/soaked_snake.png";
import strangeSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/strange_snake.png";
import virusSnakeImg from "@/assets/pets/evolutions/stageTwo/snake/virus_snake.png";

//second stage evolution data for snake pet
//need to update the requirements to make more sense with actual gameplay
//also need to update the images for these so it's not just the placeholder files

export const snakeStageTwoEvolutions = [
    {
        id:"alt_snake",
        name:"Alt Snake",
        image: altSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            style: 70,
            weird: 50,
        },
    },
    {
        id:"bright_snake",
        name:"Bright Snake",
        image: brightSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            neon: 60,
        },
    },
    {
        id:"confused_snake",
        name:"Confused Snake",
        image: confusedSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            hot: 70,
            cold: 70,
        },
    },
    {
        id:"cool_snake",
        name:"Cool Snake",
        image: coolSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            style: 60,
        },
    },
    {
        id:"cute_snake",
        name:"Cute Snake",
        image: cuteSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            style: 70,
            mundane: 50,
        },
    },
    {
        id:"deep_sea_snake",
        name:"Deep Sea Snake",
        image: deepSeaSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            wet: 70,
            cold: 70,
            mossy: 50,
        },
    },
    {
        id:"digital_snake",
        name:"Digital Snake",
        image: digitalSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            neon: 70,
            mundane: 50,
        },
    },
    {
        id:"floral_snake",
        name:"Floral Snake",
        image: floralSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            mossy: 70,
        },
    },
    {
        id:"freezing_snake",
        name:"Freezing Snake",
        image: freezingSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            cold: 80,
        },
    },
    {
        id:"gross_snake",
        name:"Gross Snake",
        image: grossSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            grime: 70,
        },
    },
    {
        id:"haunted_snake",
        name:"Haunted Snake",
        image: hauntedSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            eerie: 70,
        },
    },
    {
        id:"mouldy_snake",
        name:"Mouldy Snake",
        image: mouldySnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            grime: 60,
            wet: 60,
        },
    },
    {
        id:"normal_snake",
        name:"Normal Snake",
        image: normalSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            mundane: 50,
        },
    },
    {
        id:"smoking_snake",
        name:"Smoking Snake",
        image: smokingSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            hot: 70,
        },
    },
    {
        id:"soaked_snake",
        name:"Soaked Snake",
        image: soakedSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            wet: 80,
        },
    },
    {
        id:"strange_snake",
        name:"Strange Snake",
        image: strangeSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            weird: 70,
        },
    },
    {
        id:"virus_snake",
        name:"Virus Snake",
        image: virusSnakeImg,
        from: "snake",
        stage: 2,
        requirements: {
            neon: 70,
            eerie: 60,
        },
    },  
];