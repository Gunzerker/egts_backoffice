import IJobAssigner from 'src/types/job.assigner.type';
import IJobData from 'src/types/job.type';
import IUserData, { IUserMinimalData } from 'src/types/user.type';
import axiosInstance from '../api';
class BackofficeService {
  private readonly urlPrefix = '/back-office';
  private readonly urlPrefixUser = '/users';

  fetchAllUsers() {
    return axiosInstance.get<IUserData[]>(`${this.urlPrefix}`);
  }
  fetchAllJobs() {
    return axiosInstance.get<IJobData[]>(`${this.urlPrefix}/jobs`);
  }
  createUser(data: IUserMinimalData) {
    return axiosInstance.post<IUserMinimalData>(`${this.urlPrefixUser}`,data);
  }
  createJob(data: FormData) {
    return axiosInstance.post<IJobData>(`${this.urlPrefix}/create-job`, data);
  }
  assignJob(data: IJobAssigner) {
    return axiosInstance.post<IJobData>(`${this.urlPrefix}/assign-job`, data);
  }
  deleteUser(data:IUserData) {
    return axiosInstance.delete<IUserData>(`${this.urlPrefixUser}/${data._id}`)
  }

}
export default new BackofficeService();
