const httpStatus: {[x: string]: number} = {
  SUCCESSFUL: 200,
  CREATED: 201,
  INVALID_DATA: 400,
  INVALID_KEYS: 401,
  NOT_FOUND: 404,
};

// INVALID_KEYS' |
// 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';

export const mapHttpStatus = (status: string) => httpStatus[status];