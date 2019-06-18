// import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7 from 'framework7';
// import Framework7 from './static/f7/core/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue';
// import F7Toast from './static/f7/core/components/toast/toast.js';
// import F7Dialog from './static/f7/core/components/dialog/dialog.js';
// import F7ProgressBar from './static/f7/core/components/progressbar/progressbar.js';
// import F7RangeSlider from './static/f7/core/components/range/range.js';

// import F7Toast from 'framework7/components/toast/toast.js';
// import F7Dialog from 'framework7/components/dialog/dialog.js';
// import F7ProgressBar from 'framework7/components/progressbar/progressbar.js';
// import F7RangeSlider from 'framework7/components/range/range.js';
// import F7Notification from 'framework7/components/notification/notification.js';
// import F7Panel from 'framework7/components/panel/panel.js';

import App from './components/app';
import Header from './components/header';

import Toast from './components/toast';
import Modal from './components/modal';
import Notification from './components/notification';

import Button from './components/button';
import Preloader from './components/preloader';
import Popup from './components/popup';
import Icon from './components/icon';
import Loading from './components/loading';
import Checkbox from './components/checkbox';
import Slider from './components/slider';
import Page from './components/page';
import Panel from './components/panel';

import { Row, Col } from './components/grid';



// import Affix from './components/affix';
// import Alert from './components/alert';
// import Anchor from './components/anchor';
// import AnchorLink from './components/anchor-link';
// import AutoComplete from './components/auto-complete';
// import Avatar from './components/avatar';
// import BackTop from './components/back-top';
// import Badge from './components/badge';
// import Breadcrumb from './components/breadcrumb';
// import Card from './components/card';
// import Carousel from './components/carousel';
// import Cascader from './components/cascader';
// import Cell from './components/cell';
// import Circle from './components/circle';
// import Collapse from './components/collapse';
// import ColorPicker from './components/color-picker';
// import Content from './components/content';
// import DatePicker from './components/date-picker';
// import Divider from './components/divider';
// import Dropdown from './components/dropdown';
// import Footer from './components/footer';
// import Form from './components/form';
// import Input from './components/input';
// import InputNumber from './components/input-number';
// import Scroll from './components/scroll';
// import Split from './components/split';
// import Layout from './components/layout';
// import LoadingBar from './components/loading-bar';
// import Menu from './components/menu';
// import Message from './components/message';
// import Notice from './components/notice';
// import Poptip from './components/poptip';
// import Progress from './components/progress';
// import Radio from './components/radio';
// import Rate from './components/rate';
// import Sider from './components/sider';
// import Spin from './components/spin';
// import Steps from './components/steps';
// import Switch from './components/switch';
// import Table from './components/table';
// import Tabs from './components/tabs';
// import Tag from './components/tag';
// import Time from './components/time';
// import Timeline from './components/timeline';
// import TimePicker from './components/time-picker';
// import Tooltip from './components/tooltip';
// import Transfer from './components/transfer';
// import Tree from './components/tree';
// import Upload from './components/upload';
// import { Select, Option, OptionGroup } from './components/select';
import locale from './locale/index';

import framework7css from './static/f7/core/css/framework7.bundle.min.css'
// import framework7css from 'framework7/css/framework7.bundle.min.css'
import framework7icons from 'framework7-icons'
import loaders from 'loaders.css'
// import framework7materialicons from 'material-design-icons'

const components = {
  App,
  Button,
  ButtonGroup: Button.Group,
  Preloader,
  Popup,
  Icon,
  Loading,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Slider,
  Row,
  Col,
  Page,
  Header,
  Panel,
  // Affix,
  // Alert,
  // Anchor,
  // AnchorLink,
  // AutoComplete,
  // Avatar,
  // BackTop,
  // Badge,
  // Breadcrumb,
  // BreadcrumbItem: Breadcrumb.Item,
  // Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  // Cascader,
  // Cell,
  // CellGroup: Cell.Group,
  // Collapse,
  // ColorPicker,
  // Content: Content,
  // DatePicker,
  // Divider,
  // Dropdown,
  // DropdownItem: Dropdown.Item,
  // DropdownMenu: Dropdown.Menu,
  // Footer: Footer,
  // Form,
  // FormItem: Form.Item,
  // Input,
  // InputNumber,
  // Scroll,
  // Sider: Sider,
  // Split,
  // Submenu: Menu.Sub,
  // Layout: Layout,
  // LoadingBar,
  // Menu,
  // MenuGroup: Menu.Group,
  // MenuItem: Menu.Item,
  // Message,
  // Notice,
  // Option: Option,
  // OptionGroup,
  // Panel: Collapse.Panel,
  // Poptip,
  // Progress,
  // Radio,
  // RadioGroup: Radio.Group,
  // Rate,
  // Select,
  // // Spin,
  // Step: Steps.Step,
  // Steps,
  // Table,
  // Tabs: Tabs,
  // TabPane: Tabs.Pane,
  // Tag,
  // Time,
  // Timeline,
  // TimelineItem: Timeline.Item,
  // TimePicker,
  // Tooltip,
  // Transfer,
  // Tree,
  // Upload
};

const enkel = {
  ...components,
  iButton: Button,
  // iCircle: Circle,
  // iCol: Col,
  // iContent: Content,
  // iForm: Form,
  // iFooter: Footer,
  // iHeader: Header,
  // iInput: Input,
  // iMenu: Menu,
  // iOption: Option,
  // iProgress: Progress,
  // iSelect: Select,
  // iSwitch: Switch,
  // iTable: Table,
  // iTime: Time
};

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  Framework7.use(Framework7Vue)
  // Framework7.use([F7Toast, F7Dialog, F7ProgressBar, F7RangeSlider, F7Notification, F7Panel])
  let app = new Framework7(Object.assign({
    toast: {
      closeTimeout: 3000,
      closeButton: false,
      position: 'bottom'
    },
    dialog: {
      buttonOk: '确定',
      buttonCancel: '取消'
    },
    // navbar: {
    //   // hideOnPageScroll: true,
    //   // iosCenterTitle: false,
    // },
    // toolbar: {
    //   hideOnPageScroll: true,
    // }
  }, opts.f7params))

  // var mainView = app.views.create(opts.f7params.mainView || '.container', {
  //   routes: opts.f7params.routes
  // });

  let enkelData = {
    app: app,
    size: opts.size || '',
    transfer: 'transfer' in opts ? opts.transfer : '',
    theme: opts.f7params.theme || 'ios',
    colorTheme: opts.f7params.colorTheme || 'orange'
  }
  Vue.prototype.$enkel = enkelData;
  if (!global.ENKEL) global.ENKEL = enkelData;
  // Vue.prototype.$Loading = LoadingBar;
  // Vue.prototype.$Message = Message;
  // Vue.prototype.$Modal = Modal;
  // Vue.prototype.$Notice = Notice;
  // Vue.prototype.$Spin = Spin;
  Vue.prototype.$toast = new Toast();
  Vue.prototype.$modal = new Modal();
  Vue.prototype.$notification = new Notification();

  Object.keys(enkel).forEach(key => {
    Vue.component(key, enkel[key]);
  });


};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  locale: locale.use,
  i18n: locale.i18n,
  install,
  // Circle,
  // Switch,
  ...components
};

API.lang = (code) => {
  const langObject = window['enkel/locale'].default;
  if (code === langObject.i.locale) locale.use(langObject);
  else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
