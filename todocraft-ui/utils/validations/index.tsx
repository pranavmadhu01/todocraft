export function emailValidation(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function passwordValidation(password: string) {
  return password.length >= 6;
}

export function nameValidation(name: string) {
  return name.length > 0 && name.length <= 255;
}
