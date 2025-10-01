export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
