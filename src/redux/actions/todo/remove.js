export const TODO_REMOVE = 'domain/todo/TODO_REMOVE';
export const remove = (id) => {
    if(id) {
        return {
            type: TODO_REMOVE,
            payload: id
        };
    } else {
        throw 'Id cannot be empty';
    }
}