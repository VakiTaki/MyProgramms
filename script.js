let menu = {
    width : 1,
    height : 2,
    title : "My menu"
  };
const menu2 = {
  x2 : function (obj) {
    for (let key in obj){
        if (typeof (obj[key]) == "number") {
          obj[key] *= 2  
        } else if (typeof (obj[key]) == 'object'){
          x2(obj[key])
        }
    }
  },
  logX2 : function (obj){
    for (let key in obj){
    console.log(obj[key])
  }
  }
}

menu2.x2(menu)
menu2.logX2(menu)