import WikiService from '@/components/wiki/WikiService';
import axios from 'axios';

axios.interceptors.request.use((request) => {
  console.log('Starting Request', request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log('Response:', response);
  return response;
});

function test() {
  return;
}

it.only('test axios', (done) => {
  return axios
    .get('http://localhost:8081/wiki')
    .then((html) => {
      console.log(html.data);
      expect(html.data).toBe(5);
      return html.data;
    })
    .catch((d) => {
      return d;
    });
});

it('Gets wiki pages', async () => {
  const service = new WikiService();
  const page = await service.getPages();
  expect(page).not.toBeNull();
});
