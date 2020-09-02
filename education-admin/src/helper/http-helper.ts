import axios from 'axios';
import Axios from 'axios';
import Settings from '../settings';

const HttpHelper = {

    login: (username: string, password: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            Axios.get(Settings.baseUrl + '/user/login', { params: { name: username, password: password } })
                .then((response) => {
                    console.log(response)
                    resolve(response);
                })
        })
    }

}
export default HttpHelper;

