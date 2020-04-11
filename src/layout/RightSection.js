import React from 'react';
import { connect } from 'react-redux';
import '../css/sections.css'
import { Switch} from "react-router-dom";
import RouteTemplate from '../components/RouteTemplate'
import Bitcoin from './pages/Crypto'
const mapStateToProps = state => ({


});
const RightSection = ({ dispatch }) => (
  <Switch>
    <RouteTemplate path="/second">
      Hahahahaha
    </RouteTemplate>
    <RouteTemplate path="/third">
      Hello
    </RouteTemplate>
    <RouteTemplate path="/">
      <Bitcoin/>    
    </RouteTemplate>
  
  </Switch>


);

export default connect(mapStateToProps)(RightSection);
