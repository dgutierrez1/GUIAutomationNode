import { Coords, moveToCoords } from "./mouse-position.utils";
import * as robot from 'robotjs';

export const moveAndClick = (target: { coords: Coords }) => {
    moveToCoords(target)
    robot.mouseClick()
};