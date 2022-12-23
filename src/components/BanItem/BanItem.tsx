import React, {FC} from 'react';
import {IBanUser} from "../../types/user";
import {userApi} from "../../store/apis/userServis";
import general from "../../styles/generalStyles.module.css"

const BanItem: FC<IBanUser> = ({
    userId,
    banReason,
    user
}) => {
    const [unbanUser, { isSuccess }] = userApi.useUnbanUserMutation()

    return (
        <div className={general.section}>
            <div className={general.col}>
                <div className={general.sectionText}>{user.name}</div>
            </div>
            <div className={general.col}>
                <div className={general.sectionText}>Причина бана: {banReason}</div>
            </div>
            <div className={general.col}>
                <button
                    className={general.btn}
                    onClick={() => unbanUser(userId)}
                >
                    Разбанить
                </button>
            </div>
        </div>
    );
};

export default BanItem;