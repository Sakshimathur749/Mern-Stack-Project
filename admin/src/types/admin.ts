import{ API_URL }from '../url.ts'
const AUTH_URL = `${API_URL}/api/auth`;
export const login = async (email: string, password: string): Promise<any> => {
  const response = await fetch(`${AUTH_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  console.log(response.body,response)
  if (!response.ok) {
    throw new Error('Invalid email or password');
  }
  const data = await response.json();
  console.log(data)
  return { token: data.token, name: data.admin.name };
};
