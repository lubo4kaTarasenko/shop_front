export function baseUrl() {
  //return 'http://localhost:3001';
  return process.env.NODE_ENV == 'development' ? 'http://localhost:3001' : 'https://super-amazing-shop.herokuapp.com';
}

export function fullPath(path) {
  return `${baseUrl()}${path}`
}
