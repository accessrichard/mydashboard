import { IIterationSetting } from './../../types';
import {
    Module,
    VuexModule,
    Mutation,
    Action,
    getModule
} from 'vuex-module-decorators';
import WorkApi from '@/components/work/WorkApi';
import { ISelectedWork } from '@/types';
import store from '@/store';

const service = new WorkApi();

@Module({ dynamic: true, namespaced: true, name: 'work', store })
class Work extends VuexModule {
    public types: ISelectedWork[] = [];

    public statuses: ISelectedWork[] = [];

    public iterations: IIterationSetting[] = [];

    public members: string[] = [];

    public user: string = "@me";

    get selectedIterations(): IIterationSetting[] {
        return this.iterations
            .filter(x => x.isOn);
    }

    get selectedStatuses(): ISelectedWork[] {
        return this.statuses.filter(x => x.isOn);
    }

    get selectedTypes(): ISelectedWork[] {
        return this.types.filter(x => x.isOn);
    }

    @Action({ commit: 'SET_MEMBERS' })
    public async getMembers(): Promise<string[]> {
        if (this.members.length > 0) {
            return this.members;
        }

        return await service.getMembers();
    }

    @Mutation
    public SET_MEMBERS(members: string[]) {
        this.members = members;
    }

    @Action({ commit: 'SET_ITERATIONS' })
    public async getIterations(): Promise<IIterationSetting[]> {
        if (this.iterations.length > 0) {
            return this.iterations;
        }

        const iterations = await service.getCurrentIterations();
        return iterations.map(iteration => {
            return {
                isOn: true,
                iteration
            } as IIterationSetting;
        });
    }

    @Mutation
    public SET_ITERATIONS(iterations: IIterationSetting[]) {
        this.iterations = iterations;
    }

    @Mutation
    public SET_ITERATION(iteration: IIterationSetting) {
        const i = this.iterations.filter((x) => x.iteration.path === iteration.iteration.path);
        if (i.length > 0) {
            i[0].isOn = iteration.isOn;
        }
    }

    //// TODO: GET From API
    @Action({ commit: 'SET_TYPES' })
    public getTypes() {
        if (this.types.length > 0) {
            return this.types;
        }

        return [
            {
                name: "Task",
                isOn: false,
            },
            {
                name: "Project",
                isOn: true,
            },
            {
                name: "Bug",
                isOn: true
            }
        ];
    }

    @Action({ commit: 'SET_TYPES' })
    public async setTypes(types: ISelectedWork[]) {
        return types;
    }

    @Mutation
    public SET_TYPES(types: ISelectedWork[]) {
        this.types = types;
    }

    @Mutation
    public SET_TYPE(type: ISelectedWork) {
        const t = this.types.filter((x) => x.name === type.name);
        if (t.length > 0) {
            t[0].isOn = type.isOn;
        }
    }

    //// TODO: GET From API
    @Action({ commit: 'SET_STATUSES' })
    public getStatuses() {
        if (this.statuses.length > 0) {
            return this.statuses;
        }

        return [
            {
                name: "Active",
                isOn: true,
            },
            {
                name: "New",
                isOn: true,
            },
            {
                name: "Resolved",
                isOn: true
            },
            {
                name: "Closed",
                isOn: false
            }
        ];
    }

    @Action({ commit: 'SET_STATUSES' })
    public async setStatuses(statuses: ISelectedWork[]) {
        return status;
    }

    @Mutation
    public SET_STATUSES(statuses: ISelectedWork[]) {
        this.statuses = statuses;
    }

    @Mutation
    public SET_USER(user: string) {
        this.user = user;
    }

    @Mutation
    public SET_STATUS(status: ISelectedWork) {
        const s = this.statuses.filter((x) => x.name === status.name);
        if (s.length > 0) {
            s[0].isOn = status.isOn;
        }
    }
}

export default getModule(Work);
