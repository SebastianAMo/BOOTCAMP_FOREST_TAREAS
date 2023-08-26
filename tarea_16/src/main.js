import RecordToFile from "./plugin/RecordToFile.js";
import FileToText from "./plugin/FileToText.js";
import AudioToText from "./AudioToText.js";

import { fontProxy } from "./proxy/proxy.js";

import fontColorHandler from "./proxy/handler.js"

const target = document.querySelector("#recording__text-area");

target.addEventListener("keyup", fontColorHandler, false);


const proxy = fontProxy();

//navigator.userAgent.indexOf("Chrome")
const recorder = new AudioToText({
  writerPlugin: FileToText,
  recordPlugin: RecordToFile,
  keywords: Object.keys(proxy)
});

const getter = document.querySelector(".recording__record-button");
const output = document.querySelector(".recording__text-area");

getter.addEventListener(
  "mousedown",
  () => {
    recorder.record();
    document.querySelector('.recording__text-area').value = '';
  },
  false
);

let transcription;
getter.addEventListener(
  "mouseup",
  () => {
    transcription = recorder.transcription;
    output.value += transcription;
    proxy.value = transcription;
    recorder.WebWritter();
  },
  false
);

document.querySelector('.recording__publish-button').addEventListener('click', function() {

  const recordedContent = document.querySelector('.recording__text-area').value;
  
  const publicationDiv = document.createElement('div');
  publicationDiv.className = 'main-content__publication';  
  const publicationParagraph = document.createElement('p');
  publicationParagraph.className = 'main-content__publication--text';
  publicationParagraph.textContent = recordedContent;
  publicationDiv.appendChild(publicationParagraph);


  document.querySelector('.main-content').appendChild(publicationDiv);
  document.querySelector('.recording__text-area').value = '';
});
