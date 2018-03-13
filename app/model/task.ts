export class Task {
    constructor(
        public category: string,
        public color: string,
        public title: string,
        public content: string,
        public completed: boolean,
        public started: boolean,
        public inProgress: boolean
    ) { }
}