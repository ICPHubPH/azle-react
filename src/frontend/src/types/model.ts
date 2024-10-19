export interface User {
  joinedDate: string;
  message: string;
  rating: number;
  reviewCount: number;
  category: string;
  location: string;
  coursesCount: string;
  studentsCount: string;
  establishedYear: string;
  tags: any;
  id?: number;
  avatarUrl?: string ;
  bannerUrl?: string;
  validIdUrl?: string;
  name: string;
  organizationName?: string | null;
  bio?: string;
  email: string;
  emailVerifiedAt?: string | null;
  providerVerifiedAt?: string | null;
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

// Example Post type definition (adjust as per your actual definition)
export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  type: string;
  thumbnail: string; // Assuming thumbnail is a string URL
  user: {
    id: number;
    name: string;
    avatar: string; // Assuming user has an avatar
  };
  feedbacks: Array<{
    id: number;
    content: string;
    createdAt: string;
  }>;
}
