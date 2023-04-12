const input = document.getElementById('input');
const output = document.getElementById('output');
const encodeBtn = document.getElementById('encode');
const decodeBtn = document.getElementById('decode');
const clearBtn = document.getElementById('clear');
const copyBtn = document.getElementById('copy');
const algorithmBtn = document.getElementById('create-algorithm');
const algorithmText = document.getElementById('algorithm');

// Encode function
function encodeText() {
  let text = input.value;
  const salt = algorithmText.value;
  const encodedChars = [];

  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (salt) {
      charCode += salt.charCodeAt(i % salt.length);
    }
    encodedChars.push(String.fromCharCode(charCode));
  }
  const encodedText = encodedChars.join('');
  output.value = encodedText;
}

// Decode function
function decodeText() {
  let text = output.value;
  const salt = algorithmText.value;
  const decodedChars = [];

  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (salt) {
      charCode -= salt.charCodeAt(i % salt.length);
    }
    decodedChars.push(String.fromCharCode(charCode));
  }
  const decodedText = decodedChars.join('');
  input.value = decodedText;
}

// Clear function
function clearText() {
  input.value = '';
  output.value = '';
  algorithmText.value = '';
}

// Copy function
function copyText() {
  output.select();
  document.execCommand('copy');
}

// Create algorithm function
function createAlgorithm() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let algorithm = '';
  for (let i = 0; i < chars.length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    algorithm += chars.charAt(index);
  }
  algorithmText.value = algorithm;
}

// Event listeners
encodeBtn.addEventListener('click', encodeText);
decodeBtn.addEventListener('click', decodeText);
clearBtn.addEventListener('click', clearText);
copyBtn.addEventListener('click', copyText);
algorithmBtn.addEventListener('click', createAlgorithm);
