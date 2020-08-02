describe("The Question List component", () => {
    beforeEach(() => {
        console.log('before each');
    })

    beforeAll(() => {
        console.log('before All');
    })
    
    afterEach(() => {
        console.log('after each');
    })

    afterAll(() => {
        console.log('after all');
    })
    
    it ("should display list of items", () => {
        expect(42 + 2).toEqual(44);
    })
});