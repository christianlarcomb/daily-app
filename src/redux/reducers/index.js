import { combineReducers } from 'redux';
import themeToggle from './themeToggle'
import userManagement from './userManagement'

export default combineReducers({themeToggle, userManagement})