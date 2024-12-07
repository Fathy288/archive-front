export interface IResponse<T> {
    data: T[] | T;
    entityId: string | number | null;
    errors: any;
    message: string | null;
    succeeded?: boolean;
}
