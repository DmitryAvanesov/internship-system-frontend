export interface CompanyModel {
  id: string;
  userName: string;
  info?: string;
  email?: string;
  specializations?: string[];
  technologies?: string[];
  files?: string[];
  positions?: string[];
}
