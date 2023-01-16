#!/bin/bash

emsdk install latest
emsdk activate latest

echo "emcc environment is ready!"
echo "--------------------------"
echo "--------------------------"
echo "--------------------------"
echo "--------------------------"

emcc hello.cpp -o ./hello.js -g1 -s WASM=1 -s MODULARIZE=1 -s EXPORT_ES6=1 -s 'EXPORT_NAME="hello"' -s "EXPORTED_RUNTIME_METHODS=['ccall','cwrap']" -s 'ENVIRONMENT="web"'


echo "emcc complie finished!"
echo "--------------------------"

sed '1s;^;/* eslint-disable */;'./hello.js

sed "s|import.meta.url|'./hello.wasm'|" ./hello.js

sed "s|self.location.href|window.self.location.href|" ./hello.js


echo "hellojs replaced finished!"
echo "--------------------------"