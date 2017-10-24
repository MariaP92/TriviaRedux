import createStore from "redux-zero";


let Images =  ["img/plane.svg","img/ship.svg","img/bicycle.svg","img/bus.svg","img/car.svg","img/truck.svg"];

let Questions  = ["Which is the oldest airline in the world?",
                  "Which is the largest port in the world?",
                  "What is the longest distance cycling backwards?",
                  "What is the highest speed ever reached by a school bus?",
                  "What is the longest car trip on one tank of gas?"];

let CorrectAnswers = ["KLM","Port of Shanghai","337.60 km","590 km/h","2617 km"];

let Options =  [["Avianca","KLM","Qantas"],
                ["Port of Shanghai","Port of Singapore","Port of Rotterdam"],
                ["89.30 km","675.10 km","337.60 km"],
                ["590 km/h","320 km/h","245 km/h"],
                ["2617 km","3568 km","1732 km"]];

const initialState = {
    images: Images,
    index: 0,
    questions: Questions,
    correctAnswers: CorrectAnswers ,
    answers: [],
    options: Options 
};

const store = createStore(initialState);

export default store;
