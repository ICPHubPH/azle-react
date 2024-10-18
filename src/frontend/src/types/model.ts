export interface User {
  id?: number;
  avatarUrl?: any;
  bannerUrl?: string;
  validIdUrl?: any;
  name: string;
  organizationName?: string | null;
  bio?: string;
  email: string;
  emailVerifiedAt?: string;
  providerVerifiedAt?: any;
  role: string | "admin" | "student" | "provider";
  type?: string | "school" | "government" | "corporate" | "other";
  createdAt: string;
  updatedAt: string;
  archivedAt?: string | null;
}

export interface Feedback {
  id: number;
  rate: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface Post {
  id: number;
  thumbnail: string;
  title: string;
  type: string;
  content: string;
  createdAt: string;
  user: User;
  feedbacks: Feedback[];
}
