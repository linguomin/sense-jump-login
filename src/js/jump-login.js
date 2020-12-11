export default function jumpLogin(err) {
  if (err.response.status === 401) {
    sessionStorage.setItem("locationCache", window.location.href);
    window.location.replace(err.response.data.authurl);
  } else {
    return err;
  }
}
