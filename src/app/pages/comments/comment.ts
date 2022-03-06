// App user interface
export interface IUser {
  image: {
    png?: string;
    webp?: string;
  };
  username: string;
}

// Comment interface
export interface IComment {
  id: number;
  content: string;
  createdAt: string; // formated date "YYYY-MM-dd HH:mm:ss"
  score: number;
  user: IUser;
  replyingTo?: string;
  replies: IComment[];
}
