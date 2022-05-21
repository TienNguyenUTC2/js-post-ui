import axiosClient from './api/postApi';
import postApi from './api/postApi';

console.log('hello');
async function main() {
  //  const response = await axiosClient.get('/posts');
  //  console.log(response)
  const queryParams = {
    _page: 1,
    _limit: 3,
  };
  const response = await postApi.getAll(queryParams);
  console.log(response);
}
main();
