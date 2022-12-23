import React from 'react';
import {userApi} from "../../store/apis/userServis";
import UserList from "../UserList/UserList";
import BanList from "../BanList/BanList";
import AddChapterOrSubChp from "../AddChapterOrSubChp/AddChapterOrSubChp";
import s from './Admin.module.css'

const Admin = () => {

    const {
        data: users,
        isFetching: isFetching,
        isLoading: isProfileLoading,
        refetch,
    } = userApi.useGetAllUsersQuery()

    const {data: bans} = userApi.useGetAllBansQuery()



    return (
        <div className={s.container}>
            <AddChapterOrSubChp/>
            <UserList users={users} />
            <BanList bans={bans}/>
        </div>
    );
};

export default Admin;