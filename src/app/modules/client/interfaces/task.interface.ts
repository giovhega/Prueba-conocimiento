export interface Task {
    name: string;
    status: 'Completed' | 'Pending';
    enabled: boolean;
}