function getColor() {
  var i = 0;
  var colors = [
    '#1ffb81', '#1eee89', '#1ee192', '#1ed59a',
    '#1ec8a3', '#1ebbac', '#1eafb4', '#1ea2bd',
    '#1e95c6', '#1e89ce', '#1e7cd7', '#1e6fe0',
    '#1e63e8', '#1e56f1', '#1e4afa', '#2d46f7',
    '#2d46f7', '#4942f0', '#5840ec', '#663ee9',
    '#753de6', '#833be2', '#9239df', '#a037dc',
    '#ae35d8', '#bd34d5', '#cb32d2', '#da30ce',
    '#e82ecb', '#f735bc', '#f73eb2', '#f73db1',
    '#f746a6'
  ]
  return function() {
    return colors[++i];
  }
}

var nextColor = getColor();

function getLabel(prefix, index) {
  if (index === 0) {
    return "Invalid profile";
  } else {
    return prefix + index;
  }
}

function zeroPad(number) {
  return "00000000".slice(String(number).length) + number;
}

function getDecodedConstraintLabel(prefix, index) {
  if (index == 0) {
    return "No constraint flag set";
  }
  // 1  = (1 << 0) = level 0
  // 2  = (1 << 1) = level 1
  if (index == 3) {
    return "Constraint sets 0 and 1";
  }
  // 4  = (1 << 2) = level 2
  if (index == 7) {
    return "Constraint sets 0, 1 and 2";
  }
  // 8  = (1 << 3) = level 3
  if (index == 10) {
    return "Constraint sets 1 and 3";
  }
  // 16 = (1 << 4) = level 4
  // 32 = (1 << 5) = level 5
  return prefix + index;

}

function getCanPlayTypeConstraintLabel(prefix, index) {
  if (index == 0) {
    return "Invalid value";
  }
  // 128 = 10000000 = level 0
  // 64  = 01000000 = level 1
  // 32  = 00100000 = level 2
  // 16  = 00010000 = level 3
  // 8   = 00001000 = level 4
  // 4   = 00000100 = level 5
  var level = 8 - (index).toString(2).length;
  return prefix + level;
}

function getWapLabel(index) {
  if (index === 0) {
    return "non-WAP response";
  } else if (index === 1) {
    return "WAP response";
  }
}