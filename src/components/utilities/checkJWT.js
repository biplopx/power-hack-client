import { useJwt } from "react-jwt";
const checkJWT = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    // const { decodedToken } = useJwt(token);
    return decodedToken.email;
  }
}
export default checkJWT;