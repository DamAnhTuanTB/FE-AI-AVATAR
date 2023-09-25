export const shuffleArray = (array: any) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const capitalizeWords = (inputString: string) => {
  const words = inputString.split('_');

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const resultString = capitalizedWords.join(' ');
  return resultString;
};

export const generateRandomString = (length = 10) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const convertFileToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader: any = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };

    reader.onerror = (error: any) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

// export const convertBase64toFile = (string64: string, fileName?: string) => {
//   const arr: any = string64.split(',');
//   const mime = arr[0].match(/:(.*?);/)[1];
//   const bstr = atob(arr[arr.length - 1]);
//   let n = bstr.length;
//   const u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new File([u8arr], fileName || 'file.png', { type: mime });
// };

export const convertBase64toFile = (
  base64: string,
  filename: string,
  type = ''
) => {
  const arr: any = base64.split(',');
  let mime = '';
  if (!type) {
    mime = arr[0].match(/:(.*?);/)[1];
  }
  const bstr = atob(arr[arr.length - 1]);

  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: type || mime });
};

export const convertLinkImageToFile = async (src: string) => {
  // fetch(src)
  // .then((response) => response.blob())
  // .then((blob) => {
  //   console.log('blob', blob);
  //
  //   const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
  //   console.log('file', file);
  //   return file;
  // })
  // .catch(() => {
  //   return null;
  // });
  try {
    const res = await fetch(src);
    const blob = await res.blob();
    const file = await new File([blob], 'image.jpg', { type: 'image/jpeg' });
    return file;
  } catch (err: any) {
    console.log('err', err);
    return null;
  }
};
