import * as robot from 'robotjs';
import { config } from './configs';
import { getMousePosition, moveToCorner, Corner, moveToCoords, } from './mouse-position.utils';
import { windowExitButtonPosition, windowExpandbuttonPosition, windowMinimizeButtonPosition } from './screen.utils';
import { moveAndClick } from './mouse-actions'

config(robot);

moveToCoords({ coords: windowExitButtonPosition })
moveToCoords({ coords: windowExpandbuttonPosition })
robot.keyToggle('command', 'down')
robot.keyTap('space', 'command')
robot.keyToggle('command', 'down')
