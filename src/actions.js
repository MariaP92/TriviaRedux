import store from "./store";

export const getQuestion = () => {
    return store.getState().questions[store.getState().index];
}

export const getImage = () => {
    return store.getState().images[store.getState().index];
}

export const getOptions = () => {
    return store.getState().options[store.getState().index];
}

export const setAnswerAt = (option, index) => {
    store.getState().answers.concat(option);
    index++;
}





