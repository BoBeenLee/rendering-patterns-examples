
export interface User {
    name: string;
}

export const getUser = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "bob"
            })
        }, 3000)
    });
}


export const getUsers = (): Promise<User[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5].map(i => ({
                name: `user${i}`
            })));
        }, 3000)
    });
}