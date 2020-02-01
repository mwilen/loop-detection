# loop-detection
Loop-protector is a small library to used detect if an infinite loop occurs. Usually used in order to prevent user-provided code to cause the browser tab to completely time out and instead cancels the code execution of the loop that is occuring infinitely.

This project was inspired and is a fork of [infinite-loop-detector](https://github.com/xieranmaya/infinite-loop-detector) which is a bit outdated and also doesn't treat certain looping scenarios that well.

**Note**  
The detection is not 100% accurate when it comes to handling loops that does that a long time and may therefore timeout and assume that it's infinite. The timeout can be increased to circumvent it when needed.

## Usage

```
const loopProtector = new LoopProtector();
const code = loopProtector.protect('while(true){console.log("Hello")}')
console.log(code)
try {
    eval(code)
} catch(e){
    console.log(e)
}
```
