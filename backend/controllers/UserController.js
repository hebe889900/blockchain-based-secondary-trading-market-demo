const User = require('../models').user;

const create = async function(ctx){
  ctx.set('Content-Type', 'application/json');
  let err, user;

  let user_info = ctx.request.body;
  console.log(user_info)
  try {
    user = await User.create(user_info);
  } catch (err) {
    console.log(err)
  }
  return user
}
module.exports.create = create;

const get = async function(ctx){
  ctx.set('Content-Type', 'application/json');
  let user = null;
  const { id = null } = ctx.params

  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err)
  }
  return user
}
module.exports.get = get;
