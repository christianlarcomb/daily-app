import { combineReducers } from 'redux';
import uiManager from './uiManager'
import userManager from './userManager'

export default combineReducers({uiManager, userManager})