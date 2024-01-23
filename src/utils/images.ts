export const generateImageThumbailUrl = (
  url: string,
  newWidth: number,
  newHeight: number,
): string => {
  // Replace 'w' value
  const urlWithNewWidth = url.replace(/w=\d+/, `w=${newWidth}`);

  // Replace 'h' value
  const urlWithNewDimensions = urlWithNewWidth.replace(
    /h=\d+/,
    `h=${newHeight}`,
  );

  return urlWithNewDimensions;
};

export const generateDuotoneImageUrl = (
  url: string,
  baseUrl: boolean = false,
): string => {
  const duotoneUrl = 'monochrome=52B5CC&sat=-50';
  if (baseUrl) {
    return `${url}?${duotoneUrl}`;
  }
  return `${url}&${duotoneUrl}`;
};
