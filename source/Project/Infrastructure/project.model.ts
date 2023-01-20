import { Schema, model } from "mongoose";
import { IProject } from "../Domain/project.entity";

const ProjectSchema = new Schema<IProject>(
    {
        ID: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String,
            require: true,
            trim: true
        },
        created: {
            type: Date,
            required: true
        }
        ,
        AUTHOR_ID: {
            type: String,
            required: true,
            ref: 'User'
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
);
const ProjectModel = model('Projects', ProjectSchema);
export {ProjectModel};