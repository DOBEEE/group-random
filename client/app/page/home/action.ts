import axios from "axios";

export function actionHome(state) {
    // data = {
    //   name: data.name,
    //   id: data.id,
    //   level: data.id
    // }
    return async () => {
        const { data } = await axios.post("/api");
        return { type: "FETCH_HOME_SUCCESS", payload: data };
    };
}
