if (annyang) {
    var textArea = $('textarea');
    annyang.addCommands({
        // 'add (a) *domElement': function(domElement) {
        //     switch(domElement){
        //         case "title": textArea.text(function(i, oldVal){

        //         }) 
        //             break
        //         case "table": textArea.text(textArea.text() + "<table></table>")
        //             break 
        //         case "anchor": textArea.text(textArea.text() + "<a></a>")
        //             break
        //         case "unordered list": textArea.text(textArea.text() + "<ul></ul>") 
        //             break
        //         case "ordered list": textArea.text(textArea.text() + "<ol></ol>")
        //             break
        //         default: textArea.text(textArea.text() + domElement) 
        //     }
        // },
        'html init *title': function(title){
            console.log(title);
        }
    });

    annyang.start();
}