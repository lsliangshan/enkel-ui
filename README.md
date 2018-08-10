<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/logo-new.svg">
    </a>
</p>

# iView
[![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/iview/iview)
[![iView](https://img.shields.io/npm/v/iview.svg?style=flat-square)](https://www.npmjs.org/package/iview)
[![NPM downloads](http://img.shields.io/npm/dm/iview.svg?style=flat-square)](https://npmjs.org/package/iview)
[![NPM downloads](https://img.shields.io/npm/dt/iview.svg?style=flat-square)](https://npmjs.org/package/iview)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/iview.min.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/iview/dist/styles/iview.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)
[![Join the chat at https://gitter.im/iview/iview](https://img.shields.io/badge/chat-on_gitter-30b392.svg?style=flat-square)](https://gitter.im/iview/iview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Backers on Open Collective](https://opencollective.com/iview/backers/badge.svg)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/iview/sponsors/badge.svg)](#sponsors) 

### A high quality UI Toolkit built on Vue.js.

## Docs

### [3.0](https://www.iviewui.com)

[2.0](http://v2.iviewui.com)

[1.0](http://v1.iviewui.com)

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports both Vue.js 2 and Vue.js 1.

## Who's using iView

- [TalkingData](http://www.talkingdata.com/)
- [Alibaba 阿里巴巴](http://www.alibaba.com/)
- [Baidu 百度](https://www.baidu.com/)
- [Tencent 腾讯](https://www.tencent.com/)
- [Toutiao 今日头条](https://www.toutiao.com/)
- [JD 京东](http://www.jd.com/)
- [DiDi 滴滴](http://www.didichuxing.com/)
- [Meituan 美团](http://www.meituan.com/)
- [Sina 新浪](http://www.sina.com.cn/)

> If your company or products use iView, welcome to click [here](https://github.com/iview/iview/issues/2143) to leave a message.

## Install

> Please install Webpack first!

We recommend you create your project through [iView Cli](https://github.com/iview/iview-cli) or [iview-project](https://github.com/iview/iview-project). You can also use [vue-cli](https://github.com/vuejs/vue-cli).

### Install iView

Using npm:
```
npm install iview --save
```

Using a script tag for global use:

```html
<script type="text/javascript" src="iview.min.js"></script>
<link rel="stylesheet" href="dist/styles/iview.css">
```

You can find more info [on the website](https://www.iviewui.com/docs/guide/install-en).

## Usage

```vue
<template>
    <Slider v-model="value" range />
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```

Using css via `import`:

```js
import 'iview/dist/styles/iview.css';
```

## Compatibility

- Supports Vue.js 2.x
- Supports Vue.js 1.x - [visit 1.0 docs](http://v1.iviewui.com/)
- Supports SSR
- Supports [Nuxt.js](https://nuxtjs.org/)
- Supports [Electron](http://electron.atom.io/)
- iView does not support IE8 or below since [Vue.js](https://vuejs.org/v2/guide/reactivity.html) uses `Object.defineProperty` to track changes which is not supported by these browsers.

## Community

If you want to contribute or have questions or bugs to report:

**Questions:** Find other users at the [Gitter chat](https://gitter.im/iview/iview) or post on [StackOverflow using `[iview-ui]` tag](https://stackoverflow.com/questions/tagged/iview-ui)  
**Bugs:** [File a issue here](https://github.com/iview/iview/issues) - please provide a example so we can help you better  
**Contribute:** Contact us in [Gitter chat](https://gitter.im/iview/iview), WeChat or via mail to `admin@aresn.com`. PRs welcome!

## Major Contributors
|Name|Avatar|Name|Avatar|Name|Avatar|
|---|---|---|---|---|---|
|[Aresn](https://github.com/icarusion) |  ![](https://avatars3.githubusercontent.com/u/5370542?v=3&s=60)  |[jingsam](https://github.com/jingsam) |  ![](https://avatars3.githubusercontent.com/u/1522494?v=3&s=60)  | [rijn](https://github.com/rijn)       |  ![](https://avatars2.githubusercontent.com/u/6976367?v=3&s=60)  |
|[lcx960324](https://github.com/lcx960324)           |  ![](https://avatars3.githubusercontent.com/u/9768245?v=3&s=60)  |[GITleonine1989](https://github.com/GITleonine1989) |  ![](https://avatars1.githubusercontent.com/u/7582490?v=3&s=60)  |[huixisheng](https://github.com/huixisheng)         |  ![](https://avatars1.githubusercontent.com/u/1518967?v=3&s=60)  |
|[Sergio Crisostomo](https://github.com/SergioCrisostomo)           |  ![](https://avatars3.githubusercontent.com/u/5614559?v=3&s=60)  |  [lison16](https://github.com/lison16)           |  ![](https://avatars3.githubusercontent.com/u/20942571?v=3&s=60) |  [Xotic750](https://github.com/Xotic750)    | ![](https://avatars3.githubusercontent.com/u/216041?v=3&s=60)   | 
[huanghong1125](https://github.com/huanghong1125) | ![](https://avatars3.githubusercontent.com/u/12794817?v=3&s=60) |

### All Contributors

This project exists thanks to all the people who contribute. 
<a href="graphs/contributors"><img src="https://opencollective.com/iview/contributors.svg?width=890&button=false" /></a>

### Backers
Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/iview#backer)]

<a href="https://opencollective.com/iview#backers" target="_blank"><img src="https://opencollective.com/iview/backers.svg?width=890"></a>

### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/iview#sponsor)]

<a href="https://opencollective.com/iview/sponsor/0/website" target="_blank"><img src="https://opencollective.com/iview/sponsor/0/avatar.svg"></a>



## Ecosystem Links

- [iView-Admin](https://github.com/iview/iview-admin)
- [iView-Doc](https://github.com/iview/iview-doc)
- [iView-Cli](https://github.com/iview/iview-cli)
- [iView-Loader](https://github.com/iview/iview-loader)
- [iView-Area](https://github.com/iview/iview-area)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, iView
