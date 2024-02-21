// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/auth/signup',{
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {'Content-type': 'application/json'}
  })
  const data = await response.json()
  // TODO: on server it will only return some info of user (not password)
  resolve({ data })
}
);
}

// temporarily front end se check krrhe h once backend is created we will shift this logic to backend
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' },
      });
      if (response.ok) {  // only 200 requests
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

    // TODO: on server it will only return some info of user (not password)
  });
}

// updateUser is not in userAPI

export function signOut(userId) {
  return new Promise(async (resolve) => {
    resolve({ data: 'success' })
}
);
}