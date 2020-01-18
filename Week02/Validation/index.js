let cube = document.querySelector('.cube');
let transformRadios = document.querySelector(".transform-radios");
let currentClass = '';

function transformCube() {
    let checkedRadio = transformRadios.querySelector(':checked');
    let showClass = 'show-' + checkedRadio.value;

    if ( currentClass ) {
        cube.classList.remove( currentClass );
    }

    cube.classList.add( showClass );
    currentClass = showClass;
}

transformRadios.addEventListener("change", transformCube)