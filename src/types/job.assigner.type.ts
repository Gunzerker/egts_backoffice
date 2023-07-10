export default interface IJobAssigner {
  jobId?: string;
  assignTo: string[];
  master: string;
}
