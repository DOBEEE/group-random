import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionHome } from "./action";
import config from "./config";
import SortCard from "./components/sort-card";
import { Button, Tabs, Icon } from "antd";
const { TabPane } = Tabs;
import "./style.less";

const Home: FC<any> = function(props) {
    const homeState = useSelector((state: any) => state.home);
    const dispatch = useDispatch();
    // console.log(homeState.names);
    const linkClick = (e: any) => {
        props.history.push("/one");
    };
    const tabChange = (e: any) => {
        dispatch(actionHome({}));
    };
    useEffect(() => {
        // actionHome()(dispatch);
    }, []);
    return (
        <div>
            <div onClick={linkClick}>点我</div>
            <Tabs defaultActiveKey="1" onChange={tabChange}>
                {config.map(i => (
                    <TabPane tab={i.name} key={i.name}>
                        <SortCard
                            names={homeState.names}
                            id={i.id}
                            nums={i.nums}
                        />
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};
export default Home;
