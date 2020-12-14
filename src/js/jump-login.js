export default function jumpLogin(err, jump) {
  if (err.response.status === 401) {
    sessionStorage.setItem("locationCache", window.location.href);
    if (jump) {
      window.location.replace(err.response.data.authurl);
    } else {
      location.reload();
    }
  } else {
    return err;
  }
}
