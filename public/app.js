if (annyang) {
    var textArea = $('textarea');
    annyang.addCommands({
        'define (a) *domElement': function(domElement) {
            switch(domElement){
                case "function": console.log("function(){}") 
                    break
                case "variable": console.log("var")
                    break 
                default: console.log(domElement)
            }
        }
    });

    annyang.start();
}