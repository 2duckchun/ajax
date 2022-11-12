new Promise((resolve, _) => resolve('풀필드'))
.then((data) => console.log(data), (data) => console.error(data))


new Promise((_, reject) => reject('에럼다'))
.then((data) => console.log(data), (data) => console.log(data))


new Promise((_, reject) => reject('rejected'))
.then((data) => console.log(data)).catch((data) => console.log('캐침다'))

// new Promise((_, reject) => reject(new Error('rejected')))
// .then((data) => console.log(data), (data) => console.error(data))