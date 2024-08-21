import levels from "./levelMock.js";

const getAllLevels = () => {
        return levels;
}

const getLevel = (level) => {
    const datos = levels.find((e) => e.numero === level);
    return datos;

}

const levelService = {
    getAllLevels,
    getLevel
}

export default levelService