import ModuleA from "../src/moduleA";

describe('navigate, selection and deletion', () => {
    /// Navigate to end block by using ⌘⌥]
    test('This test pass, use ⌘⌥] to navigate to end block and delete a failing test', () => {
        expect(new ModuleA().test()).toEqual('youpii');
    });

    test('Deletion to next word', () => {
        // Delete all unused spaces by using delete tow Word End ⌥⌦ / Ctrl+Delete
        expect('                             to much spaces kill spaces').not.toContain('    ');
    });

    test('Deletion to word start word', () => {
        // Delete all unused spaces by using delete tow Word End ⌥⌫ / Ctrl+Backspace
        expect('delete the last straw!MouseForEver').not.toContain('MouseForEver');
    });

    test('Delete the failing line', () => {
        let deleteUnusedLine = 'This test should pass';
        deleteUnusedLine += '*** delete me by using ⌘⌫ ****';
        expect(deleteUnusedLine).toEqual('This test should pass');
    });

    test('Multi selection / edition : use ^G to select next occurrence then edit multi lines', () => {
        let message = `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        expect(message).toEqual('ha ha ha ha ha ha ');
    });

    test('Delete this test and navigate to begin block by using ⌘⌥[', () => {
        fail('Delete this test and navigate to top');
    });
});
