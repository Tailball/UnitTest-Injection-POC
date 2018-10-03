import uuidv1 from 'uuid/v1';

export const TODO_ADD = 'domain/todo/TODO_ADD';
export const add = (todo) => {
    return {
        type: TODO_ADD,
        payload: {
            id: uuidv1(),
            ...todo
        }
    };
}