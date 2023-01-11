#include <stdio.h>
#include <emscripten/emscripten.h>

int main(int argc, char ** argv) {
    printf("Hello World\n");
}

#ifdef __cplusplus
extern "C" {
#endif

int EMSCRIPTEN_KEEPALIVE add(int a, int b) {
  return a+b;
}

#ifdef __cplusplus
}
#endif