export const VERSION = {
  v1: '/v1',
  v2: '/v2',
  v3: '/v3',
  'v3.1': '/v3.1',
  'v3.2': '/v3.2',
};

export const APIs = {
  LOGIN: '/auth',
  USERS: '/users',
  GET_ME: '/profile',
  GENERATE_TOKEN: '/auth/generate/token',
  CHECKING_UPLOAD: '/upload/avatar',
  GET_LIST_STYLES: '/resources/avatar-styles',
  GENERATE_IMAGE: '/generate/avatar-session-no-signature',
  CREATE_SESSION: '/session',
};

export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
  DELETED: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  LENGTH_REQUIRED: 411,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
};
