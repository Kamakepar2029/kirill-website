function dc(elem, k=0){
    if (elem.split('.').length > 1){
        return document.getElementsByClassName(elem.replace('.',''))[k];
    }
    if (elem.split('$').length > 1){
        return document.getElementsByTagName(elem.replace('#',''))[k];
    }
    if (elem.split('#').length > 1){
        return document.getElementById(elem.replace('$',''));
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
        dc('.content__box__left').classList.add('onappear');
        dc('.content__box__right').classList.add('onappear');
});