const {Comment} = require ('../models');

const commentData = [
  {
    category: 'Science',
    post_user: 1,
    date: '11/22/2015',
    description: 'There are 8 planets!',

  },
  {
    category: 'General',
    post_user: 2,
    date: '10/20/2021',
    description: 'It occurs in order to save natural light, and was originally due to saving power and fuel during WW1',
  },
  {
    category: 'Health and Lifestyle',
    post_user: 3,
    date: '10/20/2021',
    description: 'Are you in a calorie deficit?',
  },
  {
    category: 'Advice',
    post_user: 4,
    date: '09/15/2021',
    description: 'If they dismiss your feelings, and are very private!',

  },
  {
    category: 'Food',
    post_user: 5,
    date: '10/20/2021',
    description: 'Quaker Oats pancake mix has been recalled.',
  },
  {
    category: 'Food',
    post_user: 5,
    date: '10/24/2021',
    description: 'Idk about recalls, but i heard skittles were banned in Cali.',
  },
  {
    category: 'News',
    post_user: 6,
    date: '10/10/2023',
    description: 'A former president was indicted!',

  },
]
  
  const seedComment = () => Comment.bulkCreate(commentData);

  module.exports = seedComment;