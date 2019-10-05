var tab = [1, 'test', [1,2,3], ,  ,];
tab.push('new element 1');
tab.unshift('new element 2');
// delete tab[0];
// tab.length = 3;
// tab.splice(0,1);
tab.forEach(function (element, index, tab) {
    tab[index] = element + 1;
});
console.log(tab);
