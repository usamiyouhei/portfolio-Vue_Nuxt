export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}