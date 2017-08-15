const buffer = require('buffer');
const AsyncStorage = require('react-native').AsyncStorage;

const authKey = 'auth';
const userKey = 'user';

class AuthService {
    getAuthInfo(cb){
        AsyncStorage.multiGet([authKey,userKey],(err,val)=>{
            if (err){
                return cb(err)
            }
            if (!val){
                return cb();
            }
        })
    }
    login(creds, cb){
        const b = new buffer.Buffer(creds.username +
            ':' + creds.password);
        const encodedAuth = b.toString('base64');
        console.log(b.toString('base64'));
        fetch('https://api.github.com/user',{
            headers:{
                'Authorization' : 'Basic ' + encodedAuth
            }
        })
            .then((response) =>{
                if (response.status >= 200 && response.status < 300){
                    return response;
                }

                throw {
                    badCredentials: response.status === 401,
                    unknownError: response.status !== 401
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((results) => {
            AsyncStorage.multiSet([
                [authKey, encodedAuth],
                [userKey, JSON.stringify(results)],
                    (err) => {
                    if (err){
                        throw err;
                    }
                    }
            ]);
                return cb({success: true});
            })
            .catch((err) =>{
                return cb(err);
            })
            .finally(() =>{
                return cb({showProgress:false});
            });
    }
}

module.exports = new AuthService();