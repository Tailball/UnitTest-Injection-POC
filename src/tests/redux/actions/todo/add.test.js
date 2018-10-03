import { add } from '../../../../redux/actions/todo/add';

describe('Add action in Todo', () => {

    //ARRANGE
    const newTodo = {
        title: 'testTitle',
        description: 'testDescription'
    };

    //ACT
    const action = add(newTodo);
    const payload = action.payload;

    //ASSERT
    it('creates a correct todo object', () => {
        expect(action).toHaveProperty('payload');
        expect(payload).toHaveProperty('title');
        expect(payload).toHaveProperty('description');
        expect(payload.title).toBe('testTitle');
        expect(payload.description).toBe('testDescription');
        expect(action.type).toBe('domain/todo/TODO_ADD');
    });

    it('adds an UID to the new todo', () => {
        expect(payload).toHaveProperty('id');
        expect(payload.id).toBeDefined();
        expect(typeof payload.id).toBe('string');
    });

});