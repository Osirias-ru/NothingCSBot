export interface IUser {
  id: number;
  username: string;
  locate_code: string;
  status_id: number;
  referral_id?: number | null;
  daily?: {
    streak: number;
    timestamp: Date;
  };
}
