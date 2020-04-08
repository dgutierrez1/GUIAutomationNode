import * as robot from "robotjs";

export interface Coords {
    x: number;
    y: number;
}

export enum Corner {
    TOP_LEFT = 'TOP_LEFT',
    TOP_RIGHT = 'TOP_RIGHT',
    BOTTOM_LEFT = 'BOTTOM_LEFT',
    BOTTOM_RIGHT = 'BOTTOM_RIGHT'
}

export const getMousePosition = (accessor = robot) => {
    const { x, y } = accessor.getMousePos();
    console.log("MOUSE POS", { x, y });
    return { x, y };
};

export const moveToCorner = ({
    corner,
    offset = { x: 0, y: 0 }
}: { corner: Corner; offset?: Coords; }) => {
    const { height, width }  = robot.getScreenSize();
    switch (corner) {
        case Corner.TOP_LEFT:
            robot.moveMouseSmooth(0, 0);
            break;
        case Corner.TOP_RIGHT:
            robot.moveMouseSmooth(width, 0);
            break;
        case Corner.BOTTOM_LEFT:
            robot.moveMouseSmooth(0, height);
            break;
        case Corner.BOTTOM_RIGHT:
            robot.moveMouseSmooth(width, height);
            break;
    }
    return getMousePosition();
};

export const moveToCoords = ({ coords }: { coords: Coords }) => {
    robot.moveMouseSmooth(coords.x, coords.y);
    return getMousePosition();
};