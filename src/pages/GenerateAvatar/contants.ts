export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum StepEnum {
  GUIDE = 1,
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

export const mesageError: any = {
  'The provided image format is not accepted. Please use a supported image format: png, jpg, jpeg, jfif':
    'Not supported image format',
  'The image size is too small. Both dimensions must be greater or equal to 768 pixels. Please use a larger image.':
    'Image too small',
  'File too large.': 'File too large',
  'Unable to detect any face in the provided image. Please provide another clear image.':
    'Unable to detect any face',
  'The detected face size is too small or too big. Please ensure the face size is appropriate.':
    'The face is too small',
  'The detected face is significantly different from the majority in the cluster. Please use images with face similarity.':
    'Different face detected',
  'The provided image is blurry. Please provide a clearer image.':
    'Blurred image',
  'The provided image contains multiple faces, please provide an image containing only one face.':
    'Multiple faces',
  'The image is duplicated. Please provide different images.':
    'Duplicated image',
};
