
$('.add-button').on('click', function() {
    if ($('input').val() === '') return;
    let template = `<li><span class="remove-button">X</span>${$('input').val()}</li>`;
    $('ul').append(template);
    $('input').val('');
});

$('ul').on('click', 'span', function() {
    $(this).closest('li').remove();
});