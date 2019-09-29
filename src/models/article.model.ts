import mongoose, {Document, Schema} from 'mongoose';

export interface IArticle extends Document {
    user_id: string;
    content: string;
}


const ArticleSchema: Schema = new Schema({
    user_id: {type: String, required: true},
    content: {type: String, required: true},
});


export default mongoose.model<IArticle>('Article', ArticleSchema);




