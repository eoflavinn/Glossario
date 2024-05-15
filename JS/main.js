initSelect = function() {
    for (var i = 0; i < dados.data.length; i++) {
        var item = dados.data[i];
        var select_text = "<option value='" + item.id + "'>" + item.titulo + "</option>";
        $('#slc-topicos').append(select_text);
    }
};

onSelectChange = function() {
    var id = $('#slc-topicos').val();
    var item = dados.data[id - 1];
    $('#lbl-txt-desc').text(item.titulo);
    $('#txt-desc').text(item.descricao);
};

dados.init(initSelect);