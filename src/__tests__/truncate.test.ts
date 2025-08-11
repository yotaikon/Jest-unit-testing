import { truncate } from '../truncate';

describe('truncate 函数测试', () => {
    describe('正常情况测试', () => {
        test('应该截断长度超过限制的字符串', () => {
            const result = truncate('Hello World', 5);
            expect(result).toBe('Hello...');
        });

        test('应该截断长度超过限制的字符串', () => {
            const result = truncate('Hello World', 5);
            expect(result).toBe('Hello...');
        });

        test('应该保持长度等于限制的字符串不变', () => {
            const result = truncate('Hello', 5);
            expect(result).toBe('Hello');
        });

        test('应该保持长度小于限制的字符串不变', () => {
            const result = truncate('Hi', 5);
            expect(result).toBe('Hi');
        });
    });

    describe('边界情况测试', () => {
        test('应该处理空字符串', () => {
            const result = truncate('', 5);
            expect(result).toBe('');
        });

        test('应该处理长度为0的情况', () => {
            const result = truncate('Hello World', 0);
            expect(result).toBe('');
        });

        test('应该处理长度为1的情况', () => {
            const result = truncate('Hello World', 1);
            expect(result).toBe('H...');
        });

        test('应该处理长度为2的情况', () => {
            const result = truncate('Hello World', 2);
            expect(result).toBe('He...');
        });
    });

    describe('负数长度测试', () => {
        test('应该处理负数长度', () => {
            const result = truncate('Hello World', -1);
            expect(result).toBe('');
        });

        test('应该处理很大的负数长度', () => {
            const result = truncate('Hello World', -100);
            expect(result).toBe('');
        });
    });

    describe('特殊字符测试', () => {
        test('应该处理包含特殊字符的字符串', () => {
            const result = truncate('Hello@World#123', 8);
            expect(result).toBe('Hello@Wo...');
        });

        test('应该处理包含中文字符的字符串', () => {
            const result = truncate('你好世界Hello', 6);
            expect(result).toBe('你好世界He...');
        });

        test('应该处理包含空格的字符串', () => {
            const result = truncate('Hello World Test', 10);
            expect(result).toBe('Hello Worl...');
        });
    });

    describe('极值测试', () => {
        test('应该处理很长的字符串', () => {
            const longString = 'a'.repeat(1000);
            const result = truncate(longString, 100);
            expect(result).toBe('a'.repeat(100) + '...');
        });

        test('应该处理很长的截断长度', () => {
            const result = truncate('Hello', 1000);
            expect(result).toBe('Hello');
        });
    });
});
