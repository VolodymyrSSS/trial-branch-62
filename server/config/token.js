module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET,
        tokens: {
            access: {
                type: 'access',
                expiresIn: '25m'
            },
            refresh: {
                type: 'refresh',
                expireIn:'24d'
            },
        },
    },
};