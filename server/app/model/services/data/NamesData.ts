class Model_Services_Data_NamesData extends App {
    constructor() {
        super();
    }
    getData() {
        const names = this.getAppConf("names");

        return names;
    }
}

export = Model_Services_Data_NamesData;
