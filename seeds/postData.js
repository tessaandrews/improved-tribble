  const {Post} = require ('../models');

  const postData =   [
    {
      id: 1,
      title: 'Science',
      description: 'How many planets are there?',
      user_id: 1 
    },
    {
      id: 2,
      title: 'Daylight Savings',
      description: 'Does anyone know the science behind daylight savings?',
      user_id: 2 
    },
    {
      id: 3,
      title: 'Fitness and Wellness',
      description: 'I am 150 lbs, and 5 feet tall. Why am I not losing weight while working out 5x a week?',
     user_id: 3
    },
    {
      id: 4, 
      title: 'Relationships',
      description: 'What are immediate red flags when pursuing a relationship?',
     user_id: 1
    },
    {
      id: 5,
      title: 'Food Recalls',
      description: 'Have there been any major food recalls lately?',
     user_id: 2
    },
    {
      id: 6,
      title: 'Current Events',
      description: 'What major events have been happening in America this week?',
     user_id: 3
    }

  ];

  const seedPost = () => Post.bulkCreate(postData);

  module.exports = seedPost;
  