import numbersGenerator from "../../utils/numbersGenerator.js";


const getSum = (level) => {
    const {num1, num2} = numbersGenerator(level);
    console.log(num1, num2)
    const sum = num1 + num2;


    return { num1, num2, sum }
}

const sumService = {
    getSum,
}

export default sumService;