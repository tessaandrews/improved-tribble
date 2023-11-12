const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    description: 'There are 8 planets!',
    post_id: 1,
    user_id: 3
  },
  {
    id: 2,
    description: 'It occurs in order to save natural light, and was originally due to saving power and fuel during WW1',
    post_id: 2,
    user_id: 1
  },
  {
    id: 3,
    description: 'Are you in a calorie deficit?',
    post_id: 3,
    user_id: 2
  },
  {
    id: 4,
    description: 'If they dismiss your feelings, and are very private!',
    post_id: 4,
    user_id: 3
  },
  {
    id: 5,
    description: 'Quaker Oats pancake mix has been recalled.',
    post_id: 5,
    user_id:1
  },
  {
    id: 6,
    description: 'Idk about recalls, but i heard skittles were banned in Cali.',
    post_id: 6,
    user_id: 2
  },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;