describe("Calculator tests", function() {
    describe("Addition tests", function() {
        
        it("should return 4", function() {
            expect(addition(2,2)).toBe(4);
        });
        it("should not return 4 for different numbers" , function(){
            expect(addition(20,22)).toBe(42);
        });
        
        it("should show an alert for NaN", function(){
            spyOn(window, "alert");
            addition("Fish",22);
            expect(window.alert).toHaveBeenCalledWith("Arguements must both be number");
        });
    
        it("should show an alert if we only supply one number", function(){
        spyOn(window,"alert");
        addition(42);
        expect(window.alert).toHaveBeenCalledWith("Arguements must both be number");
    });
});
    describe("Subtraction tests", function(){
        it("should return 4", function(){
            expect(subtraction(6,2)).toBe(4);
        });
        
        it("should not return 4 for different numbers", function(){
            expect(subtraction(20,5)).toBe(15);
        });
        
        it("should show an alert for NaN", function(){
            spyOn(window,"alert");
            subtraction("Dog",20);
            expect(window.alert).toHaveBeenCalledWith("Arguements must both be numbers");
        });
        
        it("should return -4", function(){
            expect(subtraction(1,5)).toBe(-4);
        });
        
        it("should show an alert if we only supply one number", function(){
            spyOn(window,"alert"); 
            subtraction(40);
            expect(window.alert).toHaveBeenCalledWith("Arguements must both be numbers"); 
            
     });
    });
            

    describe("Multiplication tests", function(){
        it("should return 8", function(){
            expect(multiplication(4,2)).toBe(8);
        });
    
        });
    });
