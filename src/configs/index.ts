import { EnvProps } from "./EnvProps"

class Environment {
    static API_URL: string;
    static LOAN: string;

  static init(env: EnvProps) {
      this.API_URL = env.API_URL;
      this.LOAN = env.LOAN;
  }
  
}

export {EnvProps, Environment};
