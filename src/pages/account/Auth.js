import { getUser } from "../../api/userApi";

class Auth {
    static instance = null;
  
    constructor() {
      if (!Auth.instance) {
        this.isAuthenticated = false;
        Auth.instance = this;
      }
      return Auth.instance;
    }
  
    async login(username, password) {
      try {
        const userData = await getUser(username, password);
        
        if (userData.length > 0) {
          this.isAuthenticated = true;
          localStorage.setItem('isAuthenticated', 'true');
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error during login:', error);
        return false;
      }
    }
  
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    }
  
    checkAuthentication() {
      return this.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true';
    }
  }
  
  const auth = new Auth();
  
  export default auth;
  