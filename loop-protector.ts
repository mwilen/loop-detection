class LoopProtector {

    constructor(private timeout = 1000) {}

    protect(code) {
        if (typeof code !== 'string') {
            throw new Error('You have to provide the code as a string.')
        }
        
        function loopProtectionCatcher(id, timeout) {
            if (Date.now() - id > timeout) {
                throw new Error('Loop runing too long!');
            }
        }

        return loopProtectionCatcher.toString() + code.replace(/for *\(.*\{|while *\(.*\{|do *\{/gi, (loopHead) => {
            const id = 'LP' + Math.round(Math.random() * Date.now());
            return `var ${id} = Date.now();${loopHead}loopProtectionCatcher(${id}, ${this.timeout});`
        });
    }
}