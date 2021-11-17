const q = [
  ['高', '髙'],
  ['吉', '𠮷'],
  ['酒', '洒'],
  ['人', '入'],
  ['昴', '昂'],
  ['鳴', '嗚'],
  ['倶', '惧'],
  ['師', '帥'],
  ['狭', '挟'],
  ['壁', '璧']
];
const cells = document.getElementById("cells");
const score = document.getElementById("time");
const correct = new Audio('sound/correct.mp3');
const wrong = new Audio('sound/wrong.mp3');
const MAX = 1;
let start = new Date();

const APPLICATION_KEY = "3a7cd197352c6bb75561f430c8ce517953a5d84d76e299d25705d135137c3a5f";
const CLIENT_KEY = "320b9e502407819009fb6976ee5353da13b47d73db0b1259fd0d60abd3522d55";
const ncmb = new NCMB(APPLICATION_KEY,CLIENT_KEY);
const DBName = "TestClass";
let TestClass = ncmb.DataStore(DBName);
