/**
 * Framework7 Vue 4.4.0
 * Build full featured iOS & Android apps using Framework7 & Vue
 * http://framework7.io/vue/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 15, 2019
 */
import Vue from 'vue';
import f7AccordionContent from './components/accordion-content';
import f7AccordionItem from './components/accordion-item';
import f7AccordionToggle from './components/accordion-toggle';
import f7Accordion from './components/accordion';
import f7ActionsButton from './components/actions-button';
import f7ActionsGroup from './components/actions-group';
import f7ActionsLabel from './components/actions-label';
import f7Actions from './components/actions';
import f7App from './components/app';
import f7Appbar from './components/appbar';
import f7Badge from './components/badge';
import f7BlockFooter from './components/block-footer';
import f7BlockHeader from './components/block-header';
import f7BlockTitle from './components/block-title';
import f7Block from './components/block';
import f7Button from './components/button';
import f7CardContent from './components/card-content';
import f7CardFooter from './components/card-footer';
import f7CardHeader from './components/card-header';
import f7Card from './components/card';
import f7Checkbox from './components/checkbox';
import f7Chip from './components/chip';
import f7Col from './components/col';
import f7FabButton from './components/fab-button';
import f7FabButtons from './components/fab-buttons';
import f7Fab from './components/fab';
import f7Gauge from './components/gauge';
import f7Icon from './components/icon';
import f7Input from './components/input';
import f7Link from './components/link';
import f7ListButton from './components/list-button';
import f7ListGroup from './components/list-group';
import f7ListIndex from './components/list-index';
import f7ListInput from './components/list-input';
import f7ListItemCell from './components/list-item-cell';
import f7ListItemContent from './components/list-item-content';
import f7ListItemRow from './components/list-item-row';
import f7ListItem from './components/list-item';
import f7List from './components/list';
import f7LoginScreenTitle from './components/login-screen-title';
import f7LoginScreen from './components/login-screen';
import f7MenuDropdownItem from './components/menu-dropdown-item';
import f7MenuDropdown from './components/menu-dropdown';
import f7MenuItem from './components/menu-item';
import f7Menu from './components/menu';
import f7Message from './components/message';
import f7MessagebarAttachment from './components/messagebar-attachment';
import f7MessagebarAttachments from './components/messagebar-attachments';
import f7MessagebarSheetImage from './components/messagebar-sheet-image';
import f7MessagebarSheetItem from './components/messagebar-sheet-item';
import f7MessagebarSheet from './components/messagebar-sheet';
import f7Messagebar from './components/messagebar';
import f7MessagesTitle from './components/messages-title';
import f7Messages from './components/messages';
import f7NavLeft from './components/nav-left';
import f7NavRight from './components/nav-right';
import f7NavTitleLarge from './components/nav-title-large';
import f7NavTitle from './components/nav-title';
import f7Navbar from './components/navbar';
import f7PageContent from './components/page-content';
import f7Page from './components/page';
import f7Panel from './components/panel';
import f7PhotoBrowser from './components/photo-browser';
import f7Popover from './components/popover';
import f7Popup from './components/popup';
import f7Preloader from './components/preloader';
import f7Progressbar from './components/progressbar';
import f7Radio from './components/radio';
import f7Range from './components/range';
import f7RoutableModals from './components/routable-modals';
import f7Row from './components/row';
import f7Searchbar from './components/searchbar';
import f7Segmented from './components/segmented';
import f7Sheet from './components/sheet';
import f7SkeletonBlock from './components/skeleton-block';
import f7SkeletonText from './components/skeleton-text';
import f7Statusbar from './components/statusbar';
import f7Stepper from './components/stepper';
import f7Subnavbar from './components/subnavbar';
import f7SwipeoutActions from './components/swipeout-actions';
import f7SwipeoutButton from './components/swipeout-button';
import f7SwiperSlide from './components/swiper-slide';
import f7Swiper from './components/swiper';
import f7Tab from './components/tab';
import f7Tabs from './components/tabs';
import f7Toggle from './components/toggle';
import f7Toolbar from './components/toolbar';
import f7TreeviewItem from './components/treeview-item';
import f7Treeview from './components/treeview';
import f7View from './components/view';
import f7Views from './components/views';

/* eslint no-underscore-dangle: "off" */
import componentsRouter from './utils/components-router';
import f7 from './utils/f7';

const Plugin = {
  name: 'phenomePlugin',
  installed: false,
  install(params = {}) {
    if (Plugin.installed) return;
    Plugin.installed = true;

    const Framework7 = this;
    f7.Framework7 = Framework7;

    const Extend = params.Vue || Vue; // eslint-disable-line

    Vue.component('e-accordion-content', f7AccordionContent);
    Vue.component('e-accordion-item', f7AccordionItem);
    Vue.component('e-accordion-toggle', f7AccordionToggle);
    Vue.component('e-accordion', f7Accordion);
    Vue.component('e-actions-button', f7ActionsButton);
    Vue.component('e-actions-group', f7ActionsGroup);
    Vue.component('e-actions-label', f7ActionsLabel);
    Vue.component('e-actions', f7Actions);
    Vue.component('e-app', f7App);
    Vue.component('e-appbar', f7Appbar);
    Vue.component('e-badge', f7Badge);
    Vue.component('e-block-footer', f7BlockFooter);
    Vue.component('e-block-header', f7BlockHeader);
    Vue.component('e-block-title', f7BlockTitle);
    Vue.component('e-block', f7Block);
    Vue.component('e-button', f7Button);
    Vue.component('e-card-content', f7CardContent);
    Vue.component('e-card-footer', f7CardFooter);
    Vue.component('e-card-header', f7CardHeader);
    Vue.component('e-card', f7Card);
    Vue.component('e-checkbox', f7Checkbox);
    Vue.component('e-chip', f7Chip);
    Vue.component('e-col', f7Col);
    Vue.component('e-fab-button', f7FabButton);
    Vue.component('e-fab-buttons', f7FabButtons);
    Vue.component('e-fab', f7Fab);
    Vue.component('e-gauge', f7Gauge);
    Vue.component('e-icon', f7Icon);
    Vue.component('e-input', f7Input);
    Vue.component('e-link', f7Link);
    Vue.component('e-list-button', f7ListButton);
    Vue.component('e-list-group', f7ListGroup);
    Vue.component('e-list-index', f7ListIndex);
    Vue.component('e-list-input', f7ListInput);
    Vue.component('e-list-item-cell', f7ListItemCell);
    Vue.component('e-list-item-content', f7ListItemContent);
    Vue.component('e-list-item-row', f7ListItemRow);
    Vue.component('e-list-item', f7ListItem);
    Vue.component('e-list', f7List);
    Vue.component('e-login-screen-title', f7LoginScreenTitle);
    Vue.component('e-login-screen', f7LoginScreen);
    Vue.component('e-menu-dropdown-item', f7MenuDropdownItem);
    Vue.component('e-menu-dropdown', f7MenuDropdown);
    Vue.component('e-menu-item', f7MenuItem);
    Vue.component('e-menu', f7Menu);
    Vue.component('e-message', f7Message);
    Vue.component('e-messagebar-attachment', f7MessagebarAttachment);
    Vue.component('e-messagebar-attachments', f7MessagebarAttachments);
    Vue.component('e-messagebar-sheet-image', f7MessagebarSheetImage);
    Vue.component('e-messagebar-sheet-item', f7MessagebarSheetItem);
    Vue.component('e-messagebar-sheet', f7MessagebarSheet);
    Vue.component('e-messagebar', f7Messagebar);
    Vue.component('e-messages-title', f7MessagesTitle);
    Vue.component('e-messages', f7Messages);
    Vue.component('e-nav-left', f7NavLeft);
    Vue.component('e-nav-right', f7NavRight);
    Vue.component('e-nav-title-large', f7NavTitleLarge);
    Vue.component('e-nav-title', f7NavTitle);
    Vue.component('e-navbar', f7Navbar);
    Vue.component('e-page-content', f7PageContent);
    Vue.component('e-page', f7Page);
    Vue.component('e-panel', f7Panel);
    Vue.component('e-photo-browser', f7PhotoBrowser);
    Vue.component('e-popover', f7Popover);
    Vue.component('e-popup', f7Popup);
    Vue.component('e-preloader', f7Preloader);
    Vue.component('e-progressbar', f7Progressbar);
    Vue.component('e-radio', f7Radio);
    Vue.component('e-range', f7Range);
    Vue.component('e-routable-modals', f7RoutableModals);
    Vue.component('e-row', f7Row);
    Vue.component('e-searchbar', f7Searchbar);
    Vue.component('e-segmented', f7Segmented);
    Vue.component('e-sheet', f7Sheet);
    Vue.component('e-skeleton-block', f7SkeletonBlock);
    Vue.component('e-skeleton-text', f7SkeletonText);
    Vue.component('e-statusbar', f7Statusbar);
    Vue.component('e-stepper', f7Stepper);
    Vue.component('e-subnavbar', f7Subnavbar);
    Vue.component('e-swipeout-actions', f7SwipeoutActions);
    Vue.component('e-swipeout-button', f7SwipeoutButton);
    Vue.component('e-swiper-slide', f7SwiperSlide);
    Vue.component('e-swiper', f7Swiper);
    Vue.component('e-tab', f7Tab);
    Vue.component('e-tabs', f7Tabs);
    Vue.component('e-toggle', f7Toggle);
    Vue.component('e-toolbar', f7Toolbar);
    Vue.component('e-treeview-item', f7TreeviewItem);
    Vue.component('e-treeview', f7Treeview);
    Vue.component('e-view', f7View);
    Vue.component('e-views', f7Views);

    // Define protos
    Object.defineProperty(Extend.prototype, '$f7', {
      get() {
        return f7.instance;
      },
    });

    const $theme = {};
    const { theme } = params;
    if (theme === 'md') $theme.md = true;
    if (theme === 'ios') $theme.ios = true;
    if (theme === 'aurora') $theme.aurora = true;
    if (!theme || theme === 'auto') {
      $theme.ios = !!Framework7.device.ios;
      $theme.aurora = Framework7.device.desktop && Framework7.device.electron;
      $theme.md = !$theme.ios && !$theme.aurora;
    }
    Object.defineProperty(Extend.prototype, '$theme', {
      get() {
        return {
          ios: f7.instance ? f7.instance.theme === 'ios' : $theme.ios,
          md: f7.instance ? f7.instance.theme === 'md' : $theme.md,
          aurora: f7.instance ? f7.instance.theme === 'aurora' : $theme.aurora,
        };
      },
    });

    function f7ready(callback) {
      f7.ready(callback);
    }
    Extend.prototype.Dom7 = Framework7.$;
    Extend.prototype.$$ = Framework7.$;
    Extend.prototype.$device = Framework7.device;
    Extend.prototype.$request = Framework7.request;
    Extend.prototype.$utils = Framework7.utils;
    Extend.prototype.$f7ready = f7ready;
    Extend.prototype.$f7Ready = f7ready;

    Object.defineProperty(Extend.prototype, '$f7route', {
      get() {
        const self = this;
        if (self.props && self.props.f7route) return self.props.f7route;
        if (self.f7route) return self.f7route;
        if (self._f7route) return self._f7route;

        let route;
        // eslint-disable-next-line
        if ('vue' === 'vue') {
          if (self.$vnode && self.$vnode.data && self.$vnode.data.props && self.$vnode.data.props.f7route) {
            route = self.$vnode.data.props.f7route;
          }
          let parent = self;
          while (parent && !route) {
            if (parent._f7route) route = parent._f7route;
            parent = parent.$parent;
          }
        }
        return route;
      },
      set(value) {
        const self = this;
        self._f7route = value;
      },
    });
    Object.defineProperty(Extend.prototype, '$f7router', {
      get() {
        const self = this;
        if (self.props && self.props.f7router) return self.props.f7router;
        if (self.f7router) return self.f7router;
        if (self._f7router) return self._f7router;

        let router;
        // eslint-disable-next-line
        if ('vue' === 'vue') {
          if (self.$vnode && self.$vnode.data && self.$vnode.data.props && self.$vnode.data.props.f7route) {
            router = self.$vnode.data.props.f7router;
          }
          let parent = self;
          while (parent && !router) {
            if (parent._f7router) router = parent._f7router;
            else if (parent.f7View) {
              router = parent.f7View.router;
            } else if (parent.$refs && parent.$refs.el && parent.$refs.el.f7View) {
              router = parent.$refs.el.f7View.router;
            }
            parent = parent.$parent;
          }
        }
        return router;
      },
      set(value) {
        const self = this;
        self._f7router = value;
      },
    });

    // Extend F7 Router
    Framework7.Router.use(componentsRouter);
  },
};

export default Plugin;
