import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register(user: { email: string, password: string }) {
    try {
      const users = await createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
      );
      return users;
    } catch (e) {
      return null;
    }
  }
    async login(user: { email: string, password: string }) {
      try {
        const users = await signInWithEmailAndPassword(
          this.auth,
          user.email,
          user.password
        );
        return users;
      } catch (e) {
        return null;
      }
    }
    logout() {
      return signOut(this.auth);
    }
}
