const baseURL = 'http://localhost:3000/api';

describe('GET /api/info', () => {
    it('should be up', async () => {
    const isAPIUp = await fetch(`${baseURL}/info`, {
      method: 'GET',
    });

    expect(isAPIUp.status).toBe(200);
    const res = await isAPIUp.json();
    expect(res.message).toBe('API up');
  });

});
