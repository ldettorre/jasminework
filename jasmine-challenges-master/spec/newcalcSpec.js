describe("Extra calculator functions", function() {
            describe("Area function", function() {
                it("should return 314.16 for a circle with radius 10", function() {
                    expect(areaOfCircle(10)).toBe(314.16);
                });
                it("should return 78.54 for a circle with radius 5", function() {
                    expect(areaOfCircle(5)).toBe(78.54);
                });

                it("should show an alert for string", function() {
                    spyOn(window, "alert");
                    areaOfCircle("string");
                    expect(window.alert).toHaveBeenCalledWith("This must value must be a number");
                });
                
                it("should show an alert for negative numbers", function(){
                    spyOn(window,"alert");
                    areaOfCircle(-6);
                    expect(window.alert).toHaveBeenCalledWith("This value must be positive");
                });
            });
                


                describe("squareRoot function", function() {
                    it("should return 3 for square root of 9", function() {
                        expect(squareRoot(9)).toBe(3);
                    });
                    
                    it("should show alert for string", function(){
                        spyOn(window,"alert");
                        squareRoot("string");
                        expect(window.alert).toHaveBeenCalledWith("This value must be a number.")
                    })
                });

                describe("square", function() {
                    it("should return 9 as the square of 3", function() {
                        expect(squareMe(3)).toBe(9);
                    });
                
                    it("should return alert for string", function(){
                    spyOn(window,"alert");
                    squareMe("string");
                    expect(window.alert).toHaveBeenCalledWith("This value must be a number!!!")
                })
                })
                
                describe("cube", function(){
                    it("should return 3 cubed as 27", function(){
                        expect(cubeMe(3)).toBe(27);
                    })
                    it("should alert if value entered is string",function(){
                        spyOn(window,"alert");
                        cubeMe("string");
                        expect(window.alert).toHaveBeenCalledWith("This needs to be a number!");
                    })
                })
                
                describe("areaOfTriangle", function(){
                    it(" 2 * 3 / 2", function(){
                        expect(aOT(2,3,2)).toBe(3);
                    })
                    it("should alert if n1,n2 or,n3 is string",function(){
                        spyOn(window,"alert");
                        aOT("string","string","string");
                        expect(window.alert).toHaveBeenCalledWith("Values must be numbers");
                    })
                })
                
                describe("yearsLeft", function() {
                    it("should return years until 2018", function(){
                        expect(yearsLeft(2000)).toBe(18);
                    })
                    it("years left from 2000",function(){
                        expect(yearsLeft(1918)).toBe(100);
                    })
                    it("should alert if value is a string",function(){
                        spyOn(window,"alert");
                        yearsLeft("string");
                        expect(window.alert).toHaveBeenCalledWith("Numbers only please!");
                    })
                })

            }); //end of extra calc functions
