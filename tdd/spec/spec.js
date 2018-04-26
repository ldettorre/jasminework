describe("Calculator tests", function() {
    describe("Addition tests", function() {
        it("should return 4", function() {
            expect(addition(2,2)).toBe(4);
        });
        it("should not return 4 for different numbers" , function()
        {
            expect(addition(20,22)).toBe(42);
        })
        
    })
})

