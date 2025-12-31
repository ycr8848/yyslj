
export enum WorkflowStep {
  LOGIN = 'LOGIN',
  PERSONAL_INFO = 'PERSONAL_INFO',
  INFO_REVIEW = 'INFO_REVIEW',
  REGISTRATION = 'REGISTRATION',
  PAYMENT = 'PAYMENT',
  PRINT_TICKET = 'PRINT_TICKET',
  ATTEND_EXAM = 'ATTEND_EXAM',
  VIEW_SCORE = 'VIEW_SCORE',
  PRINT_CERTIFICATE = 'PRINT_CERTIFICATE',
  FINISHED = 'FINISHED'
}

export interface UserData {
  name: string;
  idNumber: string;
  phone: string;
  photoUrl: string;
  school: string;
  major: string;
}

export interface RegistrationData {
  city: string;
  center: string;
  session: string;
  examDate: string;
}
