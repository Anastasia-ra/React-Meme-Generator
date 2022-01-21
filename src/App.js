import {
  appStyle,
  inputStyle,
  tTextInput,
  bTextInput,
  memeTemplateInput,
  generateButton,
  previewHeading,
  previewImage,
  downloadButton,
  mainHeading,
  leftPartStyle,
  rightPartStyle,
  middlePartStyle,
  historyStyle,
} from './Style';
import { useState, React } from 'react';
import useDownloader from 'react-use-downloader';
import DisplayHistory from './DisplayHistory';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templateUrl, setTemplateUrl] = useState('');
  const [memeTemplate, SetMemeTemplate] = useState('');
  const [memeUrl, setMemeUrl] = useState('');
  const [memeName, setMemeName] = useState('');
  const [memeHistory, setMemeHistory] = useState([]);

  // To download the meme
  const { download } = useDownloader();

  // Search for template meme with user input
  function searchArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // Check if string includes and makes it case insensitive
      if (arr[i].name.toLowerCase().includes(memeTemplate.toLowerCase())) {
        setTemplateUrl(arr[i].url);
        setMemeName(arr[i].name);
        console.log(arr[i].name);
        console.log(arr[i].url);
        break;
      } else if (i === arr.length - 1) {
        console.log('No such template');
      }
    }
  }
  // Get template
  function fetchTemplates() {
    return fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((data) => {
        // Creates array list of url templates
        const templateList = data.map((e) => ({
          name: e.name,
          url: e.blank,
        }));
        console.log(templateList);
        searchArray(templateList);
      })
      .catch((error) => console.error(error));
  }

  // Search for the template URL
  function searchUrl(event) {
    SetMemeTemplate(event.currentTarget.value);
    fetchTemplates().catch((error) => console.error(error));
  }

  // Create meme with user inputs
  function createMeme(url, topString, bottomString) {
    const bodyData = {
      background: url,
      style: 'string',
      text_lines: [topString, bottomString],
      extension: 'string',
      redirect: true,
    };

    // Request meme
    fetch('https://api.memegen.link/images/custom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    })
      .then((response) => {
        const responseUrl = response.url;
        console.log(responseUrl);
        setMemeUrl(responseUrl);
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div css={appStyle} className="App">
      <div css={leftPartStyle}> </div>
      <div css={rightPartStyle}> </div>
      <div css={middlePartStyle}> </div>
      <h1 css={mainHeading}>Meme Generator</h1>
      <label css={tTextInput}>
        Top text
        <br />
        <input
          css={inputStyle}
          value={topText}
          onChange={(event) => {
            setTopText(event.target.value);
          }}
        />
      </label>
      <label css={bTextInput}>
        Bottom text
        <br />
        <input
          css={inputStyle}
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.target.value);
          }}
        />
      </label>
      <label css={memeTemplateInput}>
        Meme Template
        <br />
        <input
          css={inputStyle}
          value={memeTemplate}
          onChange={(event) => {
            searchUrl(event);
          }}
        />
      </label>
      <button
        css={generateButton}
        data-test-id="generate-meme"
        onClick={() => {
          createMeme(templateUrl, topText, bottomText);
          // Add this meme to the meme history
          const currentMeme = {
            topText: topText,
            bottomText: bottomText,
            memeTemplate: memeName,
          };
          setMemeHistory((prev) => [...prev, currentMeme]);
          console.log(memeHistory);
        }}
      >
        Generate
      </button>
      <h2 css={previewHeading}>Preview your Meme</h2>
      <img
        css={previewImage}
        src={memeUrl}
        alt="Meme Template"
        data-test-id="meme-image"
      />

      <button
        css={downloadButton}
        onClick={() => download(memeUrl, 'meme.png')}
      >
        Download
      </button>

      <DisplayHistory obj={memeHistory} />
    </div>
  );
}
export default App;
