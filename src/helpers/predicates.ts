export const isActiveLink = (
  linkRoute: string,
  currentRoute: string,
): boolean => {
  return currentRoute.includes(linkRoute.toLocaleLowerCase());
};
