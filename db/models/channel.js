const { Model } = require("objection");
const User = require("./user");

class Channel extends Model {
    static get tableName() {
        return 'channel';
    }

    // static tableName='channel';

    // static relationMappings={
    //     Channel:{
    //         relation:Model.HasOneRelation,
    //         modelClass:Channel,
    //         join:{
    //             from:'channel.id',
    //             to:'user.channel_id'
    //         }
    //     }
    // }
}

module.exports = Channel;