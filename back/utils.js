import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        date:user.date,
        pm:user.pm,
        am: user.am,
       }, process.env.JWT_SECRET, {expiresIn: '30d'});
};


