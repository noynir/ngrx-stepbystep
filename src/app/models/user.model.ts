export interface UserInfo {
    firstName: string;
    lastName: string;
    jobTitle: string;
    avatar: string;
    phoneNumber: string;
};

export interface UserModel {

    id: number;
    username: string;
    email: string;
    info: UserInfo;
    teamId: number;
    roleId: number
};

