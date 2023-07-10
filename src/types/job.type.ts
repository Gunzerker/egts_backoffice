import IUserData from './user.type';

export default interface IJobData {
  _id: string;
  site_name: string;
  reference: string;
  operateur: string;
  adress: string;
  contact_client: string;
  site_raccord: boolean;
  chambre: string;
  bpe: string;
  four_fo: boolean;
  thirty_fo: boolean;
  devis_av: boolean;
  add_info: string;
  assignedTo: IUserData[];
  title: string;
  start_date: Date;
  end_date: Date;

}
