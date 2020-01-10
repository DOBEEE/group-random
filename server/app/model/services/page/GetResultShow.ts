import fs = require("fs");
import path = require("path");
type Res = {
    [index: string]: string[];
};
class Model_Services_Page_GetResultShow extends App {
    public resFilePath: string;
    public names: string[];
    public resData: any;
    constructor() {
        super();

        this.resFilePath = path.resolve(
            bun.globalPath.ROOT_PATH,
            "../out/res.js"
        );
        this.resData = JSON.parse(fs.readFileSync(this.resFilePath, "utf8"));
    }
    writeRes(data: any) {
        fs.writeFileSync(this.resFilePath, JSON.stringify(data));
    }
    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    getDataByRandom(id: string) {
        const nums = this.resData[id].nums;
        let { restNames } = this.resData;
        // console.log(222, this.resData);
        this.resData[id].res = [];
        for (let index = 0; index < nums; index++) {
            const pIndex = this.getRandomInt(0, restNames.length);
            const person = restNames[pIndex];
            restNames.splice(pIndex, 1);
            this.resData[id].res.push(person);
        }
    }
    getRandomResById(id: string) {
        const objServiceData = new Model_Services_Data_NamesData();
        this.names = objServiceData.getData();
        console.log(this.names.length);
        // let data = JSON.parse(fs.readFileSync(this.resFilePath, "utf8"));
        let { restNames } = this.resData;
        const nums = this.resData[id].nums;
        if (restNames.length === 0) {
            this.resData.restNames = [...this.names];
        } else if (restNames.length <= nums) {
            this.resData[id].res = [...restNames];
            for (let index = 0; index < nums - restNames.length; index++) {
                this.resData[id].res.push("空");
            }
            this.resData.restNames = [];
            this.writeRes(this.resData);
            return this.resData[id].res;
        }
        this.getDataByRandom(id);
        this.writeRes(this.resData);
        return this.resData[id].res;
    }
    resetData(id: string) {
        const objServiceData = new Model_Services_Data_NamesData();
        this.names = objServiceData.getData();
        console.log(this.names.length);
        let { restNames } = this.resData;
        let res = this.resData[id].res;
        this.resData.restNames = restNames
            .concat(res)
            .filter((i: string) => i !== "空");
        this.getDataByRandom(id);
        return res;
    }
}

export = Model_Services_Page_GetResultShow;
