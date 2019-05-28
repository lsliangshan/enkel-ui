import Framework7 from 'framework7';
import Button from './components/button';
import Icon from './components/icon';
import Affix from './components/affix';
import Alert from './components/alert';
import Anchor from './components/anchor';
import AnchorLink from './components/anchor-link';
import AutoComplete from './components/auto-complete';
import Avatar from './components/avatar';
import BackTop from './components/back-top';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import Card from './components/card';
import Carousel from './components/carousel';
import Cascader from './components/cascader';
import Cell from './components/cell';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
import Collapse from './components/collapse';
import ColorPicker from './components/color-picker';
import Content from './components/content';
import DatePicker from './components/date-picker';
import Divider from './components/divider';
import Dropdown from './components/dropdown';
import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Input from './components/input';
import InputNumber from './components/input-number';
import Scroll from './components/scroll';
import Split from './components/split';
import Layout from './components/layout';
import LoadingBar from './components/loading-bar';
import Menu from './components/menu';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Page from './components/page';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Rate from './components/rate';
import Sider from './components/sider';
import Slider from './components/slider';
import Spin from './components/spin';
import Steps from './components/steps';
import Switch from './components/switch';
import Table from './components/table';
import Tabs from './components/tabs';
import Tag from './components/tag';
import Time from './components/time';
import Timeline from './components/timeline';
import TimePicker from './components/time-picker';
import Tooltip from './components/tooltip';
import Transfer from './components/transfer';
import Tree from './components/tree';
import Upload from './components/upload';
import { Row, Col } from './components/grid';
import { Select, Option, OptionGroup } from './components/select';
import locale from './locale/index';

import framework7css from 'framework7/css/framework7.css'

const components = {
  Button,
  Icon,
  Affix,
  Alert,
  Anchor,
  AnchorLink,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.Item,
  ButtonGroup: Button.Group,
  Card,
  Carousel,
  CarouselItem: Carousel.Item,
  Cascader,
  Cell,
  CellGroup: Cell.Group,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Col,
  Collapse,
  ColorPicker,
  Content: Content,
  DatePicker,
  Divider,
  Dropdown,
  DropdownItem: Dropdown.Item,
  DropdownMenu: Dropdown.Menu,
  Footer: Footer,
  Form,
  FormItem: Form.Item,
  Header: Header,
  Input,
  InputNumber,
  Scroll,
  Sider: Sider,
  Split,
  Submenu: Menu.Sub,
  Layout: Layout,
  LoadingBar,
  Menu,
  MenuGroup: Menu.Group,
  MenuItem: Menu.Item,
  Message,
  Modal,
  Notice,
  Option: Option,
  OptionGroup,
  Page,
  Panel: Collapse.Panel,
  Poptip,
  Progress,
  Radio,
  RadioGroup: Radio.Group,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Step: Steps.Step,
  Steps,
  Table,
  Tabs: Tabs,
  TabPane: Tabs.Pane,
  Tag,
  Time,
  Timeline,
  TimelineItem: Timeline.Item,
  TimePicker,
  Tooltip,
  Transfer,
  Tree,
  Upload
};

const enkel = {
  ...components,
  iButton: Button,
  iCircle: Circle,
  iCol: Col,
  iContent: Content,
  iForm: Form,
  iFooter: Footer,
  iHeader: Header,
  iInput: Input,
  iMenu: Menu,
  iOption: Option,
  iProgress: Progress,
  iSelect: Select,
  iSwitch: Switch,
  iTable: Table,
  iTime: Time
};

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  console.log('....', opts.f7params)
  let app = new Framework7(opts.f7params)
  // let mainView = app.views.create('.container')

  Object.keys(enkel).forEach(key => {
    Vue.component(key, enkel[key]);
  });

  Vue.prototype.$enkel = {
    size: opts.size || '',
    transfer: 'transfer' in opts ? opts.transfer : ''
  };

  Vue.prototype.$Loading = LoadingBar;
  Vue.prototype.$Message = Message;
  Vue.prototype.$Modal = Modal;
  Vue.prototype.$Notice = Notice;
  Vue.prototype.$Spin = Spin;
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
  Circle,
  Switch,
  ...components
};

API.lang = (code) => {
  const langObject = window['enkel/locale'].default;
  if (code === langObject.i.locale) locale.use(langObject);
  else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
