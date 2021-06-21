export interface StudentModel {
  id: string;
  userName: string;
  score: number;
  interviews: string[];
  info?: string;
  specializations?: string[];
  technologies?: string[];
}
