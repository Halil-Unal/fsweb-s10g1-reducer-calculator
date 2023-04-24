import React from 'react';
import { useReducer } from 'react';
import { ADD_ONE, addOne, APPLY_NUMBER, CHANGE_OPERATION,applyNumber,changeOperation ,remakenumber,REMAKE_OPERATION} from "./actions/index.js";

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { type } from '@testing-library/user-event/dist/type/index.js';

function reducer(state, action) {
  switch (action.type) {
    case ADD_ONE: {
      return {
        ...state,
        total: state.total+1
      };
    }
    case APPLY_NUMBER : {
      let result = state.total;
      if (state.operation === "+") {
        result += action.payload;
      } else if (state.operation === "-") {
        result -= action.payload;
      } else if (state.operation === "*") {
        result *= action.payload;
      }
      return {
        ...state,
        total: result,
       
      };
    }
    case CHANGE_OPERATION: {
      return {
        ...state,
       
        operation: action.payload
      };
    }
    case REMAKE_OPERATION: {
      return {
        ...state,
       
        total:0,
      };
    }

    
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAdditionClick = () => {
    dispatch(changeOperation('+'));
  };
  
  const handleSubtractionClick = () => {
    dispatch(changeOperation('-'));
  };
  
  const handleMultiplicationClick = () => {
    dispatch(changeOperation('*'));
  };


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(addOne())} value={1} />
              <CalcButton onClick={() =>  dispatch(applyNumber(2))} value={2} />
              <CalcButton onClick={() => () => dispatch(applyNumber(3))} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(4))} value={4} />
              <CalcButton onClick={() => dispatch(applyNumber(5))} value={5} />
              <CalcButton onClick={() => dispatch(applyNumber(6))} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(7))} value={7} />
              <CalcButton onClick={() => dispatch(applyNumber(8))} value={8} />
              <CalcButton onClick={() => dispatch(applyNumber(9))} value={9} />
            </div>

            <div className="row">
            <CalcButton onClick={() => handleAdditionClick("+")} value={"+"} />
          <CalcButton onClick={() => handleMultiplicationClick("*")} value={"*"} />
           <CalcButton onClick={() => handleSubtractionClick("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton  onClick={() => dispatch(remakenumber("CE"))} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
