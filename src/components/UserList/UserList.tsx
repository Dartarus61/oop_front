import React, {FC} from 'react';
import {IProfile} from "../../types/user";
import UserItem from "../UserItem/UserItem";
import general from "../../styles/generalStyles.module.css"

interface IUserList {
    users: IProfile[] | undefined
}

const UserList: FC<IUserList> = ({users}) => {
    return (
        <div className={general.container}>
            <div className={general.text}>Пользователи:</div>
            {users?.map(user => (
                <UserItem {...user} key={user.email}/>
            ))}
        </div>
    );
};

export default UserList;