import os from 'os';
export default function f() {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`
}