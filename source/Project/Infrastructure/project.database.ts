import { ProjectRepository } from '../Domain/project.repository';
import { ProjectModel } from './project.model';
import { IProject } from '../Domain/project.entity';

export class ProjectDatabaseRepository implements ProjectRepository {
	async findProjectById(ID: string): Promise<IProject | null> {
		const project = await ProjectModel.findOne({ ID });
		return project;
	}

	async findProjectsByAuthorId(authorId: string): Promise<IProject[]> {
		const projects = await ProjectModel.find({ authorId });
		return projects;
	}

	async registerProject(project: IProject): Promise<IProject | void> {
		try {
			const projectModel = new ProjectModel(project);
			const savedProject = await projectModel.save();
			return savedProject;
		} catch (e) { console.error({ at: `${__dirname} => registerProject`, message: e }); }
	}

	async updateProject(ID: string, name: string): Promise<IProject | null> {
		const updatedProject = await ProjectModel.findOneAndUpdate({ ID }, { name }, { new: true });
		return updatedProject;
	}

	async deleteProject(ID: string): Promise<IProject | null> {
		const deltedProject = await ProjectModel.findOneAndDelete({ ID });
		return deltedProject;
	}
}