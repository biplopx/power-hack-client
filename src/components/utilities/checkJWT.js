const checkJWT = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return decodedToken.email;
  } else {
    return false
  }
}
export default checkJWT;