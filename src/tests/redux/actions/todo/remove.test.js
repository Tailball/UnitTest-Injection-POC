import uuidv1 from 'uuid/v1';

import { remove } from '../../../../redux/actions/todo/remove';

describe('Remove action in Todo', () => {

    //arrange
    //nothing to arrange

    it ('Creates a correct remove action', () => {
        //act
        const action = remove(uuidv1());
    
        //assert
        expect(action).toHaveProperty('type');
        expect(action).toHaveProperty('payload');
        expect(action.type).toBe('domain/todo/TODO_REMOVE');
        expect(action.payload).toBeDefined();
    });

    it('Should crash when no id is supplied', () => {
        //act inside assert

        //assert
        expect(() => {
            remove();
        }).toThrow();
    });
});