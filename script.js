"use strict";

var input_text = document.getElementById("input_text");
var input_key  = document.getElementById("input_key");
var encrypt_text_but  = document.getElementById("encrypt_text_but");
var encrypt_code_but  = document.getElementById("decrypt_code_but");
var rand_key_but      = document.getElementById("rand_key_but");

encrypt_text_but.onclick = function(){
    input_text.value = str_format(
                            krypt(input_text.value, input_key.value));
}

decrypt_code_but.onclick = function(){
    input_text.value = str_from_codes(
                                krypt(
                           arr_format(input_text.value), input_key.value));
}

rand_key_but.onclick = function(){
    input_key.value = str_format(
                        rand_key(input_text.value.length));
}

//takes two iterables (strings or arrays) and XORs the
//txt with the key
function krypt(txt, key){
    var kp = 0;
    var ct = [];
    for (let i = 0; i < txt.length; i++){
        let m = typeof(txt) == "string" ? txt.charCodeAt(i) : txt[i];
        let n = typeof(key) == "string" ? key.charCodeAt(kp) : key[kp];
        ct.push(m ^ n);
        kp = (kp + 1) % key.length;
    }
    return ct;
}

function rand_key(len){
    var k = [];
    for (let i = 0; i < len; i++){
        k.push(parseInt(Math.random() * 255));
    }
    return k;
}

function str_from_codes(arr){
    var s = "";
    for (let i = 0; i < arr.length; i++){
        s += String.fromCharCode(arr[i]);
    }
    return s;
}

function str_format(arr){
    var s = arr[0].toString();
    for (let i = 1; i < arr.length; i++){
        s += "|" + arr[i];
    }
    return s;
}

function arr_format(str){
    return str.split("|").map(i => parseInt(i));
}
