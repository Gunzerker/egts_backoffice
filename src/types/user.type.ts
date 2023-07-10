export default interface IUserData {
  _id: string;
  login: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  active: boolean;
}
export interface IUserMinimalData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}
