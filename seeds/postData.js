  const {Post} = require ('../models');

  const postData =   [
    {
      title: 'Science',
      description: 'How many planets are there?',
      id: 1, // Associate this post with a user
      category: 'Science', // Associate this post with a topic
    },
    {
      title: 'Daylight Savings',
      description: 'Does anyone know the science behind daylight savings?',
      id: 2, // Associate this post with a user
      category: 'General', // Associate this post with a topic
    },
    {
      title: 'Fitness and Wellness',
      description: 'I am 150 lbs, and 5 feet tall. Why am I not losing weight while working out 5x a week?',
      id: 3, // Associate this post with a user
      category: 'Health and Lifestyle', // Associate this post with a topic
    },
    {
      title: 'Relationsips',
      description: 'What are immediate red flags when pursuing a relationship?',
      id: 4, // Associate this post with a user
      category: 'Advice', // Associate this post with a topic
    },
    {
      title: 'Food Recalls',
      description: 'Have there been any major food recalls lately?',
      id: 5, // Associate this post with a user
      category: 'Food', // Associate this post with a topic
    },
    {
      title: 'Current Events',
      description: 'What major events have been happening in America this week?',
      id: 6, // Associate this post with a user
      category: 'News', // Associate this post with a topic
    }

  ];

  const seedPost = () => Post.bulkCreate(postData);

  module.exports = seedPost;
  