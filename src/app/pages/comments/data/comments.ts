import { formatDate } from '@angular/common';
import { IComment, IUser } from "../comment";
import { COMMENT_DATE_FORMAT, COMMENT_LOCALE } from "../comment.config";

const getDateTime = (value: number): string => {
  let time = Date.now() - value;
  return formatDate(time, COMMENT_DATE_FORMAT, COMMENT_LOCALE)
}

export const TempData: {currentUser: IUser, comments: IComment[]} = {
  currentUser: {
    image: {
      png: 'assets/images/avatars/image-juliusomo.png',
      webp: 'assets/images/avatars/image-juliusomo.webp',
    },
    username: 'juliusomo',
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: getDateTime(1000 * 3600 * 24 * 35),
      score: 12,
      user: {
        image: {
          png: 'assets/images/avatars/image-amyrobson.png',
          webp: 'assets/images/avatars/image-amyrobson.webp',
        },
        username: 'amyrobson',
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: getDateTime(1000 * 3600 * 24 * 16),
      score: 5,
      user: {
        image: {
          png: 'assets/images/avatars/image-maxblagun.png',
          webp: 'assets/images/avatars/image-maxblagun.webp',
        },
        username: 'maxblagun',
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: getDateTime(1000 * 3600 * 24 * 8),
          score: 4,
          replyingTo: 'maxblagun',
          user: {
            image: {
              png: 'assets/images/avatars/image-ramsesmiron.png',
              webp: 'assets/images/avatars/image-ramsesmiron.webp',
            },
            username: 'ramsesmiron',
          },
          replies: [],
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: getDateTime(1000 * 3600 * 24 * 2.3),
          score: 2,
          replyingTo: 'ramsesmiron',
          user: {
            image: {
              png: 'assets/images/avatars/image-juliusomo.png',
              webp: 'assets/images/avatars/image-juliusomo.webp',
            },
            username: 'juliusomo',
          },
          replies: []
        },
      ],
    },
  ],
};
