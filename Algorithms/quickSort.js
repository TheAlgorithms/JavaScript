function stableSort(v, f)
{
    if (f === undefined) {
        f = function(a, b) {
            a = ""+a; b = ""+b;
            return a < b ? -1 : (a > b ? 1 : 0);
        }
    }
    var dv = [];
    for (var i=0; i<v.length; i++) {
        dv[i] = [v[i], i];
    }
    dv.sort(function(a, b){
              return f(a[0], b[0]) || (a[1] - b[1]);
            });
    for (var i=0; i<v.length; i++) {
        v[i] = dv[i][0];
    }
}
