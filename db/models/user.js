const { Model } = require("objection");

class User extends Model {
    // static get tableName() {
    //     return 'user';
    // }


    static tableName='user';

    static relationMappings={
        user:{
            relation:Model.HasOneRelation,
            modelClass:User,
            join:{
                from:'channel.id',
                to:'user.channel_id'
            }
        }
    }
}

module.exports = User;