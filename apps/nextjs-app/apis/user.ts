
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