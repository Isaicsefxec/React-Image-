import React from 'react';
import ReactDOM from 'react-dom';

import Isai from './Header/Isai'
import Data from "./Dataset/DataSet.json"


ReactDOM.render(
  <div>
    <Isai url={Data[0].imgUrl} altkey="alter" name={Data[0].name}/> 
    <Isai url={Data[1].imgUrl} altkey="alter" name={Data[1].name }/>
    <Isai url={Data[2].imgUrl} altkey="alter" name={Data[2].name }/>
    <Isai url={Data[2].imgUrl} altkey="alter" name={Data[2].name }/>
  </div>,
  document.getElementById('root')
);
