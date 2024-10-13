export interface User {
  id: string;
  email: string;
  name?: string;
  organizationName?: string;
  bio?: string;
  avatarUrl?: string;
  contactNumber?: string;
  validIdUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Feedback {
  id: string;
  userId: User["id"];
  rating: number;
  comment?: string;
  createdAt: string;
  updatedAt: string;
}