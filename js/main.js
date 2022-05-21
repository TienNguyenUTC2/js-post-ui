import axiosClient from './api/postApi';
import postApi from './api/postApi';

async function main() {
  //  const response = await axiosClient.get('/posts');
  //  console.log(response)
  try {
    const queryParams = {
      _page: 1,
      _limit: 3,
    };
    const data = await postApi.getAll(queryParams);
    console.log(data);
  } catch (error) {
    console.log('get all failed', error);
  }
}

main();
