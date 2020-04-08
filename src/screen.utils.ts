import { Coords } from "./mouse-position.utils";
import * as robot from 'robotjs';

const { height, width }  = robot.getScreenSize();
console.log({ height, width });

export const windowExitButtonPosition: Coords = { x: 15, y: 35 };
export const windowMinimizeButtonPosition: Coords = { x: 35, y: 35 };
export const windowExpandbuttonPosition: Coords = { x: 55, y: 35 };