function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img"); 

    html.classList.toggle('light');

    if (html.classList.contains('light')) {
        img.setAttribute('src', '/assets/Design sem nome (3).png');
    } else {
        img.setAttribute('src', '/assets/DOCES (1).png');
    }
    if (html.classList.contains('light')) {
        img.setAttribute('alt', 'Foto da logo da Nib salgados, com um emoji utilizando óculos, com o fundo amarelo');
    } else {
        img.setAttribute('alt', 'Pessoa de óculos escuro com o fundo escuro');
        }
}

