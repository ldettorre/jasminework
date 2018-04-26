describe ("fizzBuzz functions",function(){
    describe("fizzBuzz number",function(){
        it("should alert Fizzbuzz",function(){
            spyOn(window,"alert");
            fizzBuzz(15);
            expect(window.alert).toHaveBeenCalledWith("FizzBuzz")
        })
        it("should alert Fizz",function(){
            spyOn(window,"alert");
            fizzBuzz(6);
            expect(window.alert).toHaveBeenCalledWith("Fizz")
        })
        it("should alert Buzz",function(){
            spyOn(window,"alert");
            fizzBuzz(10);
            expect(window.alert).toHaveBeenCalledWith("Buzz")
        })
        it("should alert string",function(){
            spyOn(window,"alert");
            fizzBuzz("dog");
            expect(window.alert).toHaveBeenCalledWith("Input must be whole number")
        })
        })
    })
