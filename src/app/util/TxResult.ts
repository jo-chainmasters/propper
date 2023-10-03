export interface TxResult {
  success: boolean;
  errorCode?: number;
  errorText?: string;
  transaction: any;
}
