import React from 'react'
import { useState } from 'react';
// import ErrorEx from './tutorial/useState/ErrorEx';
// import BasicEx from './tutorial/useState/BasicEx';
// import UseStateArray from './tutorial/useState/UseStateArray';
// import UseStateObject from './tutorial/useState/UseStateObject';
// import UseStateCounter from './tutorial/useState/UseStateCounter';
// import UseEffectBasics from './tutorial/useEffect/UseEffectBasics';
// import UseEffectCleanup from './tutorial/useEffect/UseEffectCleanup';
import UseEffectFetchData from './tutorial/useEffect/UseEffectFetchData';
import MultipleReturns from './tutorial/conditionalRendering/MultipleReturns'
import ShortCircuit from './tutorial/conditionalRendering/ShortCircuit'
import ShowHide from './tutorial/conditionalRendering/ShowHide'
import CantrolledInputs from './tutorial/forms/CantrolledInputs';
import MultipleInputs from './tutorial/forms/MultipleInputs';
import UseRefBasics from './tutorial/useRef/UseRefBasics';
import Final from './tutorial/useReducer';
import PropDrilling from './tutorial/prop-drilling/PropDrilling';
import UseContext from './tutorial/use-context/UseContext';
import CustomHooks from './tutorial/custom-hooks/CustomHooks'
import PropTypes from './tutorial/prop-types'
import Routing from './tutorial/router/index'
const App = () => {
  return (
    <div className='container'>
      {/* <ErrorEx/>
      <BasicEx />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter/> */}

      {/* <UseEffectBasics/>
      <UseEffectCleanup/>*/}
      {/* <UseEffectFetchData/>  */}
      {/* <MultipleReturns/> */}
      {/* <ShortCircuit/> */}
      {/* <ShowHide/> */}
      {/* <CantrolledInputs/> */}
      {/* <MultipleInputs/> */}
      {/* <UseRefBasics/> */}
      {/* <Final/> */}
      {/* <PropDrilling/> */}
      {/* <UseContext/> */}
      {/* <CustomHooks/> */}
      {/* <PropTypes/> */}
      <Routing/>
    </div>
  )
}

export default App
