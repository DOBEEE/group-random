import React, { FC, useState, useEffect } from "react";
import "./style.less";

const ItemCard: FC<any> = function(props) {
    const { names = [], run = false, result = "" } = props;
    const [name, setName] = useState("空位");

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    const scrollNames = () => {
        window.requestAnimationFrame(loop);
    };
    function loop() {
        setName(names[getRandomInt(0, names.length)]);
        if (!window._run) return;
        scrollNames();
    }

    useEffect(() => {
        if (run) {
            window._run = true;
            scrollNames();
        } else {
            window._run = false;
        }
    }, [run]);
    return <div className="item-card">{result || name}</div>;
};

export default ItemCard;
