const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem("job_tracker_token", token);
  },
  getAuthToken() {
    return window.localStorage.getItem("job_tracker_token");
  },
  clearAuthToken() {
    window.localStorage.removeItem("job_tracker_token");
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  }
};

export default TokenService;
