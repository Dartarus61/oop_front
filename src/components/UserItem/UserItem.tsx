import React, {FC, useState} from 'react';
import {IProfile} from "../../types/user";
import {userApi} from "../../store/apis/userServis";
import Dropdown, {Option} from "../Dropdown/Dropdown";
import general from "../../styles/generalStyles.module.css"

const UserItem: FC<IProfile> = ({
    id,
    name,
    surname,
    email,
    roles,
    commentCount,
    postCount,
    posts,
}) => {
    const roleList = ["CREATOR", "ADMIN"]
    const [choice, setChoice] = useState([] as Option[])
    const [banReason, setBanReason] = useState('')

    const [banUser] = userApi.useBanUserMutation()
    const [addRole] = userApi.useAddRoleMutation()
    const [deleteRole] = userApi.useDeleteRoleMutation()

    const handleChoice = (date: Option[]) => {
        setChoice(date)
    }

    const banThisUser = () => {
        banUser({userId: id, banReason})
    }

    const addRoleThisUser = () => {
        addRole({userId: id, value: choice[0].label})
    }

    const deleteRoleThisUser = () => {
        deleteRole({userId: id, value: choice[0].label})
    }

    return (
        <div className={general.section}>
            <div className={general.col}>
                <div className={general.sectionText}>{name}</div>
                <div className={general.sectionText}>
                    Роли:
                </div>
                {roles?.map(role =>  <div className={general.sectionText} key={role.id}>{role.description}</div>)}
            </div>
            <div className={general.col}>
                <input
                    type='text'
                    placeholder='Введите причину бана'
                    value={banReason}
                    onChange={e => setBanReason(e.target.value)}
                    className={general.input}
                />
                <button
                    className={general.btn}
                    onClick={banThisUser}
                >
                    Забанить
                </button>
            </div>
            <div className={general.col}>
                <Dropdown
                    isMulti={false}
                    isSearchable
                    placeHolder='Выберите роль'
                    options={roleList?.map(
                        (role, index) =>
                            ({
                                value: 'id' + index,
                                label: role,
                            } as Option)
                    )}
                    key={1}
                    value={choice}
                    onChange={handleChoice}
                />
                <button
                    className={general.btn}
                    onClick={addRoleThisUser}
                >
                    Добавить роль
                </button>
                <button
                    className={general.btn}
                    onClick={deleteRoleThisUser}
                >
                    Убрать роль
                </button>
            </div>
        </div>
    );
};

export default UserItem;