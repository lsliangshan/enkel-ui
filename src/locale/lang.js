// using with vue-i18n in CDN
/*eslint-disable */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export default function (lang) {
    if (!isServer) {
        if (typeof window.enkel !== 'undefined') {
            if (!('langs' in enkel)) {
                enkel.langs = {};
            }
            enkel.langs[lang.i.locale] = lang;
        }
    }
};
/*eslint-enable */
