import React, {FC} from 'react';
import {IBanUser} from "../../types/user";
import BanItem from "../BanItem/BanItem";
import general from "../../styles/generalStyles.module.css"

interface IBanList {
    bans: IBanUser[] | undefined
}

const BanList: FC<IBanList> = ({bans}) => {
    return (
        <div className={general.container}>
            <div className={general.text}>Список забанненых пользователей:</div>
            {bans?.map(ban => (
                <BanItem {...ban} key={ban.id}/>
            ))}
        </div>
    );
};

export default BanList;