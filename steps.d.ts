/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type main = typeof import('./pages/main.js');
type login = typeof import('./pages/login.js');
type logout = typeof import('./pages/logout.js');
type wrpass = typeof import('./pages/wrpass.js');
type wrlogin = typeof import('./pages/wrlogin.js');
type navigation = typeof import('./pages/navigation.js');
type switchlang = typeof import('./pages/switchlang.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, main: main, login: login, logout: logout, wrpass: wrpass, wrlogin: wrlogin, navigation: navigation, switchlang: switchlang }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
