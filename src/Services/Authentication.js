export function PostData(type, userData) {
  
  let BaseURL = 'http://localhost/development/khalil-reactjs-project/apis/Middleware.php?api=auth';
  
  return new Promise((resolve, reject) => {
  
    fetch(BaseURL+type, {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((res) => {
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });

  });
  
}