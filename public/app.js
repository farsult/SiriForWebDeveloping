if (annyang) {
    var textArea = $('textarea');
    annyang.addCommands({
        'add (a) *domElement': function(domElement) {
            switch(domElement){
                case "title": textArea.text("function(){}") 
                    break
                case "table": textArea.text("var")
                    break 
                default: textArea.text(domElement)
            }
        },
        'html init': function(){
            textArea.text() ? alert("Do you want to create new template?") : textArea.text("<html><head><title></title></head><body></body></html>")
        }
    });

    annyang.start();
}