
exports.seed = async function (knex) {
  // channel table entries
  // await knex('channel').del()
  await knex('channel').insert([{
    id: 4,
    channel_name: 'pune'
  },
  {
    id: 5,
    channel_name: 'banglore'
  },
  {
    id: 6,
    channel_name: 'dharamshala'
  }]);

  // user table entries
  // await knex('user').del()
  await knex('user').insert([{
    id: 4,
    user_name: 'sanju',
    email: "sanju1@gmail.com",
    password: "Sanju@1",
    channel_id: 1
  },
  {
    id: 5,
    user_name: 'sallu',
    email: "sallu1@gmail.com",
    password: "Sallu@1",
    channel_id: 1
  },
  {
    id: 6,
    user_name: 'pinki',
    email: "pinki1@gmail.com",
    password: "Pinki@1",
    channel_id: 1
  }]);

  // video table data
  await knex('video').insert([{
    id: 1,
    title: "video1ByUser1",
    channel_id: 1
  },
   {
    id: 2,
    title: "video2ByUser2",
    channel_id: 1
  }, 
  {
    id: 3,
    title: "video3ByUser3",
    channel_id: 2
  }])
};
