import fs from 'fs';

export const getLoginData = JSON.parse(fs.readFileSync('test/data/loginData.json'));