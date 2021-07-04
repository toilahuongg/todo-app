import mongoose, { Document, model, Model, Schema } from "mongoose"

export interface ITodo extends Document {
    title: string
}

const TodoSchema: Schema = new Schema({
    title: {
        type: String
    }
})


export const Todo: Model<ITodo> = mongoose.models.Todo || model("Todo", TodoSchema)