const { Model } = require("objection");

class Video extends Model {
    // static get tableName() {
    //     return 'video';
    // }


    static tableName='video';

    static relationMappings={
        user:{
            relation:Model.HasOneRelation,
            modelClass:Video,
            join:{
                from:'channel.id',
                to:'video.channel_id'
            }
        }
    }
}

module.exports = Video;