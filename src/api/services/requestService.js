import axios from "axios";

const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

const instance = axios.create({
  baseURL: API_URL,
});
// создал экземпляр класса axios со своей конфигурацией где baseURL: API_URL

instance.interceptors.request.use((config) => {
  // interceptors - это перехватчик запросов для того чтобы с ними можно было что-то сделать перед отправкой в then или catch
  const token = localStorage.getItem("token");
  // console.log(config);
  // из консоль лог видно что config это {} у которого есть св-во headers, куда мы добавляем новый объект со свойством Token.
  // где будем хранить ссылку на Локал сторадж с ключем 'token'.
  // ?? почему в headers пишем ?
  token && (config.headers.Token = token);
  // читаем так, если токен после регистрации пришел с бэк энда, то мы его записывем в config.headers.Token

  return config;
});

export default instance;
