import React, { FC, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import ItemCard from "./itemCard";
import "./style.less";

const SortCard: FC<any> = function(props) {
    const { nums = 0, id, names = [] } = props;
    const [run, setRun] = useState(false);
    const [result, setResult] = useState([]);
    const [cache, setCache] = useState([]);
    const runHandle = async () => {
        if (!run) {
            setRun(true);
            const { data } = await axios.post("/getResult", { id });
            setCache(data.data);
        } else {
            setRun(false);
            setResult(cache);
        }
    };
    const reStart = async () => {
        if (!run) {
            const { data } = await axios.post("/getResult", {
                id,
                reset: true
            });
            setCache(data.data);
            setResult([]);
            setRun(true);
        }
    };
    const cardGroup = () => {
        let res = [];
        for (let i = 0; i < nums; i++) {
            res.push(
                <ItemCard key={i} names={names} run={run} result={result[i]} />
            );
        }
        return res;
    };
    return (
        <div className="sort-card">
            <div className="content">{cardGroup()}</div>
            <div className="oparetion">
                {result.length === 0 ? (
                    <Button onClick={runHandle}>{run ? "停" : "开始"}</Button>
                ) : (
                    <Button onClick={reStart}>重来</Button>
                )}
            </div>
        </div>
    );
};
export default SortCard;
