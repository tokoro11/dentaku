function get_calc(btn) {
  if(btn.value == "=") {
    document.dentaku.display.value = eval(document.dentaku.display.value);
  } else if (btn.value == "C") {
    document.dentaku.display.value = "";
  } 
  else {
    if (btn.value == "×") {
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    } 
    //１桁目０だったら何もしない
    if(document.dentaku.display.value == '' &&
    btn.value == '0'){
     return;

    }
    if(document.dentaku.display.value == '' &&
    btn.value == '00'){
     return;
    }
    //記号かつ打った文字が０だったら何もしない。
    const last = document.dentaku.display.value.slice(-1);
    if((last == '+' ||
    last == '-' ||
    last == '*' ||
    last == '/') &&
    btn.value == '0'){
     return;
    }

    if((last == '+' ||
    last == '-' ||
    last == '*' ||
    last == '/') &&
    btn.value == '00'){
     return;
    }

    //最後の文字が記号かつ打った文字が記号なら何もしない
    if((last == '+' ||
    last == '-' ||
    last == '*' ||
    last == '/') &&
    (btn.value == '+' ||
    btn.value == '-' ||
    btn.value == '*' ||
    btn.value == '/' )){
     return;
    }

    //最初の文字が記号だったら何もしない
    if(document.dentaku.display.value == '' &&
    (btn.value == '+' ||
    btn.value == '-' ||
    btn.value == '*' ||
    btn.value == '/' )){
     return;
    }


//最後の文字が.かつ打った文字が.なら何もしない
    if(last == '.' &&
    btn.value == '.'){
     return;
      }

      if(document.dentaku.display.value == '' &&
      btn.value == '.' 
      ){
       return;
      }










    document.dentaku.display.value += btn.value;
    document.dentaku.multi_btn.value = "×";
    document.dentaku.div_btn.value = "÷";
  }
}
