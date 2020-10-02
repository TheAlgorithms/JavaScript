(function()
{
    var ConvertBase = function(num)
    {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };

    // binary to hexadecimal
    ConvertBase.bin2hex = function(num)
    {
        return ConvertBase(num).from(2).to(16);
    };
    
    this.ConvertBase = ConvertBase;
    
})(this);

/*
Usage example:
ConvertBase.bin2hex('111'); // '7'
*/