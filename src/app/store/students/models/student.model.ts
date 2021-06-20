import {DictionaryElementModel} from '@store/dictionaries/models/dictionary-element.model';

export interface StudentModel {
  id: string;
  userName: string;
  score: number;
  interviews: string[];
  // normalizedUserName: string;
  // email: string;
  // normalizedEmail: string;
  // emailConfirmed: boolean;
  // passwordHash: string;
  // securityStamp: string;
  // concurrencyStamp: string;
  // phoneNumber: string;
  // phoneNumberConfirmed: boolean;
  // twoFactorEnabled: boolean;
  // lockoutEnd: string;
  // lockoutEnabled: boolean;
  // accessFailedCount: number;
  info?: string;
  specializations?: string[];
  technologies?: string[];
  // subjectInstances: any[];
  // firstName: string;
  // middleName: string;
  // lastName: string;
  // interviews: any[];
  // priorities: any[];
  // assessments: any[];
}
