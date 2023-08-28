export const FILE_MESSAGE = {
  ERROR_FORMATED_IMAGE:
    'Only files in .JPG, .JPEG, .PNG, formats are supported!',
  ERROR_FORMATED_IMAGE_SOCIAL:
    'Only files in .JPG, .JPEG, .PNG, HEIC and WEBP formats are supported!',
  // ERROR_SIZE_LIMIT: (limitSize: number) =>
  //   `File size must not be zero-bytes and not exceeds ${limitSize}MB`,
  ERROR_SIZE_LIMIT: (limitSize?: number) => `File too large to open.  `,
};
