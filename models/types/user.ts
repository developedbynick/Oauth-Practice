interface User {
    name: {
        first: string;
        last: string;
    },
    fullName: string;
    email: string;
    accountType: 'traditional' | 'email-only' | 'oauth',
    password: string,
    pastPasswords: string[]
}
export default User;