import {questions} from './questions';

describe(`The question reducer`, () => {
    it (`should not modify the state for unrecognized action`, () => {
        const state = ['foo', 'bar'];
        const newState = questions(state, {type: 'ANY_UNRECOGNIZED_STATE'});

        expect(newState).toEqual(state)
    });

    it (`should add question`, () => {
        const state = [{question_id: 'foo'}, {question_id: 'bar'}];
        const newQuestion = {question_id: 'baz'};
        const newState = questions(state, {type: `FETCHED_QUESTION`, question: newQuestion});

        console.log('newState', newState);
        expect(newState).toContain(newQuestion);
        expect(state).not.toContain(newQuestion);
        expect(newState).toHaveLength(3);
    });
});