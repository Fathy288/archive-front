export interface ILogin {
    id: string;
    email: string | null;
    username: string | null;
    entityId: string | number;
    entityName: string | null;
    name: string | null;
    token: string | null;
    phone: string | null;
    roleId: number;
    roleName: string | null;
    documentTypeAccessibilities: string[];
}
