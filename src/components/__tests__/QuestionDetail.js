import {mapStateToProps} from '../QuestionDetail';

describe(`The Question Details component`, () => {
    describe(`The Container element`, () => {
        describe(`mapStateToProps`, () => {
            it(`should mapStateToProps correctly`, () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: 'Space is big'
                };
                const appState = {
                   questions: [sampleQuestion]
                };
                const ownProps = {
                    question_id: 42,
                };
                const componentState = mapStateToProps(appState, ownProps);
                console.log(componentState);
                expect(componentState).toEqual(sampleQuestion);
            })
        })
    })
    it (`should not regress`, () => {

    });
})