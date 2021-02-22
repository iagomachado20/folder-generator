import { CONFIGS_FOLDER } from "../config/constants";

export const calcPositionProducts = (index) => {

    const { gap, size } = CONFIGS_FOLDER.featuredProduct;
    const columns = 4;


    let calc = {
        x: 0,
        y: CONFIGS_FOLDER.products_position.y
    };

    if (index < 4) {
        calc = {
            x:  (size * index) + (gap * index) - 40,
            y: CONFIGS_FOLDER.products_position.y
        }
    } else {

        calc = {
            x:  (size * (index - columns)) + (gap * index) - 125,
            y: CONFIGS_FOLDER.products_position.y * 2 - size + 100
        }
    }

    return calc;

};

export const calcPositionFeaturedsCard = (index) => {

    const { gap, size } = CONFIGS_FOLDER.featuredProduct;

    return (size * index) + (gap * index);

};