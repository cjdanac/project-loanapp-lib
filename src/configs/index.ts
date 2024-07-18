import { EnvProps } from "./EnvProps"

class Environment {
    static API_URL: string;
    static INTEREST: string;
    static PAYMENT: string;

  static init(env: EnvProps) {
      this.API_URL = env.API_URL;
      this.INTEREST = env.INTEREST;
      this.PAYMENT = env.PAYMENT
  }
  
}

export {EnvProps, Environment};
