export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum StepEnum {
  GUIDE = 1,
  UPLOAD_IMAGE = 1.5,
  PICK_GENDER = 2,
  PREVIEW_STYLE = 2.5,
  CHOOSE_STYLE = 3,
  GENERATE_SUCCESS = 4,
}

export enum TypeSessionStatus {
  ACTIVE = 'active',
  ERROR = 'error',
  COMPLETE = 'complete',
}

export enum TypeDownload {
  ALL_RESULT = 'ALL_RESULT',
  ALL_AVATAR = 'ALL_AVATAR',
  ALL_ORIGIN_PHOTO = 'ALL_ORIGIN_PHOTO',
  ALL_AVATAR_WITH_STYLE = 'ALL_AVATAR_WITH_STYLE',
}
