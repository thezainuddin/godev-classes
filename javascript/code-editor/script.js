const html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javascript');

const code = document.getElementById('code');
console.log(code.contentWindow.document);

//code editor online
const compile = () => {
    document.body.onkeyup = function(){
        code.onsuspend();
        code.writeln(html.value);
    }
}