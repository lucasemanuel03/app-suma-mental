const numbersGenerator = (level) => {

    //CASO PARTICULAR, un número de 2 digitos y otro de 3 digitos
    if (level == 5){
        const [minA, maxA] = getRangosNumericos(2);
        const [minB, maxB] = getRangosNumericos(3);
        const num1 = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
        const num2 = Math.floor(Math.random() * (maxB - minB + 1)) + minB;

        return {num1, num2}
    }

    const [min, max] = getRangosNumericos(level);
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    return {num1, num2}
}

const getRangosNumericos = (level) => {
    let min
    let max

    switch(level) {
        case 1: 
            min = 1
            max = 9
            break;
        case 2:
            min = 10;
            max = 99;
            break;
        case 3:
            min = 100;
            max = 999;
            break;
        case 4:
            min = 1000;
            max = 9999;
            break;
        default:
            min = 1;
            max = 9;
    }

    return [min, max];
}

export default numbersGenerator;