export enum ResponseErrorCode {
  SUCCESS = 'ok',
  FAILURE = 'failure', // Simply failure, no more detail, check server log
  UNKNOW_ERROR = 'unknow error', // Something wrong on server
  BAD_REQUEST = 'bad request', // Client request is wrong
  USER_IS_NOT_EXIST = 'User is no longer exist',
  NO_HMAC = 'No HMAC signature sent',
  WRONG_HMAC = 'HMAC signature does not match',
  NO_API_KEY = 'No API key passed',
  INVALID_API_KEY = 'Invalid API public key passed',
  NO_ADDRESS_PERMISSION = 'Do NOT have permission for the address',
  ADDRESS_NOT_EXIST = 'Deposit address is NOT exist',
  UNKNOW_CMD = 'Unknown command (cmd)',
  INVALID_CURRENCY = 'Invalid currency code for currency',
  INVALID_WITHDRAWAL_AMOUNT = 'Withdrawal amount must be greater than 0',
  NOT_ENOUGH_WITHDRAWAL_AMOUNT = 'That amount is larger than your balance!',
  INVALID_WIHTDRAWAL_ADDRESS = 'No address set!',
  INSUFFICIENT_FUND = 'Fund is insufficient!',
  FAILED_TO_GENERATE_DEPOSIT = 'Failed to generate new deposit address',
  LESS_THAN_MINIMAL_AMOUNT = 'Less than minimal amount to withdraw!',
}
