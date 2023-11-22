import React from 'react'
import User from '../user/User'
import { UserInfo } from '@/types/types'

interface Props {
    users: UserInfo[]
}

let icons = [
    `https://icon-library.com/images/avatar-icon/avatar-icon-8.jpg`,
    `https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg`,
    `https://icon-library.com/images/avatar-icon/avatar-icon-13.jpg`,
    `https://icon-library.com/images/avatar-icon/avatar-icon-7.jpg`
]

const UserContainer: React.FC<Props> = ({ users }) => {

    let upLeft = { top: 0, left: 0, borderRadius: '0 0 30px 0' }
    let upRight = { top: 0, right: 0, borderRadius: '0 0 0 30px' }
    let bottomLeft = { bottom: 0, left: 0, borderRadius: '0 30px 0 0' }
    let bottomRight = { bottom: 0, right: 0, borderRadius: '30px 0 0 0' }

    let output = users.map((user: UserInfo, i: number) => {
        let style = {}

        switch (i) {
            case 0: style = upLeft;
                break;
            case 1: style = upRight;
                break;
            case 2: style = bottomLeft;
                break;
            case 3: style = bottomRight;
                break;
            default: style = {}
                break;
        }

        return (
            <User
                key={i}
                mainUser
                userCoord={user.coord}
                username={user.username}
                style={style}
                icon={icons[i]}
            />
        )
    })

    return (
        <div>
            {output}
        </div>
    )
}

export default UserContainer