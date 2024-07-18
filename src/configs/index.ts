import { EnvProps } from "./EnvProps"

class Environment {
    static API_URL: string;
    static INTEREST: string;
    static DATA: string;
    static PAYMENT: string;

  static init(env: EnvProps) {
      this.API_URL = env.API_URL;
      this.INTEREST = env.INTEREST;
      this.DATA = env.DATA;
      this.PAYMENT = env.PAYMENT;
  }
  
}

export {EnvProps, Environment};
