module.exports =function truncate(str, num) {
  //str = '';
  //num = ;
    var truncd = '';
    if (str.length > num) {
      truncd = str.slice(0,num-3) + '...';
      truncd = truncd.substr(0, Math.min(truncd.length, truncd.lastIndexOf(" "))) + '...';
        return truncd;
    }
    //console.log(str);
    return truncd;
}
//var trun = truncate("Abifoluwa", 2);