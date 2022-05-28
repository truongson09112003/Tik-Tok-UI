import axios from 'axios';

// file môi trường .env.development sẽ được webpack tai khi chạy ứng dụng và  nó được lưu trong process.env
// là một Obj ta có thể console.log(process.env) để xem ở bất cứ đâu
// và .env.developmen là chạy trên môi trường develoment khi chạy trên môi trường này thì nó sẽ ưu tiên file
// môi trường  này và tương tự nó có .env.production ... và trong các môi trường đó nó cũng sẽ ưu tiên file có
// tên theo môi trường đó ❤️❤️❤️❤️😘😘😘

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const reponse = await httpRequest.get(path, options);

    return reponse.data;
};

export default httpRequest;
