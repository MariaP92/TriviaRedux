import React, { Component } from 'react';
import store from "./store";
import { connect } from "redux-zero/react";
import { getQuestion, getImage, getOptions, setAnswerAt, onOptionSelect, genReport } from "./actions";
import './App.css';

const Option = ({ index, option }) => {
  const onOptionSelect = (e) => {
    console.log('value: ', option);
    setAnswerAt(option, index);
  };
  return (
    <div>
      <div className="questions container-fluid">
        
        <a className="btn btn-warning btnClic" onClick={onOptionSelect()} ><span> {String.fromCharCode(65 + index)} -  </span>  {option} </a>
      </div>
    </div>);
};
const App = ({ players, selectedPlayerIndex }) => {
  let optionList = '';
  let yourAnswers = '';
  const onSubmit = () => {
    console.log('onSubmit');
    //model.getReport () ;
  }
  const genReport = () => {
    let result = [];
    for (let i = 0; i < store.getState().correctAnswers.length; i++) {
      let rpta = '';
      if (store.getState().correctAnswers[i] === store.getState().answers[i]) {
        { rpta = <div>{store.getState().questions[i]} {store.getState().answers[i]}</div> };
      }
      else {
        { rpta = <div>{store.getState().questions[i]}  <strike>{store.getState().answers[i]} </strike> - {store.getState().correctAnswers[i]}</div> };
      }
      result.push(rpta);
    }
    return result;
  }

  if (getOptions()) {
    optionList = getOptions().map((option, index) => {
      return (<Option key={index} index={index} option={option} />);
    })
  } else {

    yourAnswers = (<div>
      <h2>  Here are your answers: </h2>
      <ol>
        {
          genReport().map((question, index) => <li key={index}> {question}  {store.getState().answers[index]} </li>)
        }
      </ol>
      <button onClick={onSubmit}>submit</button>
    </div>
    );
  }

  return (
    <div className="containerQuizz">
      <div className="questions container-fluid">
        <div className="row">
        </div>
        <div className="row">
          <div className="col-md-6 col-xs-6 col-sm-6">
            <img src={getImage()} />
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6">
            <p>  {getQuestion()}  </p>
          </div>
          <div>
            {
              optionList
            }
            {
              yourAnswers
            }

          </div>
        </div>
      </div>
    </div>
  );
}



const mapToProps = ({ questions }) => ({ questions });

export default connect(mapToProps)(App);

