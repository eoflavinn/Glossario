dados = {};

dados.init = function(callback) {
    $.getJSON('JS/dic.json', function(data) {
        dados.data = data;
        if(callback) {
            callback();
        }
    });
}