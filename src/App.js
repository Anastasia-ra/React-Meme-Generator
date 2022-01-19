import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templateUrl, setTemplateUrl] = useState('');
  const [memeTemplate, SetMemeTemplate] = useState('');
  const [memeUrl, setMemeUrl] = useState('');
  //   // Get template list
  //   function fetchTemplates() {
  //     return fetch('https://api.memegen.link/templates')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Creates array list of url templates
  //         let templateList = data.map((e) => ({
  //           name: e.name,
  //           url: e.blank,
  //         }
  //         // Searchs for the input in the arary
  //         for (let i in templateList ) {
  //           if (i.name.includes(memeTemplate)) {
  //             setTemplateUrl(i.url);
  //             break;
  //           };
  //         }

  //         ));
  //         console.log(templateObject);
  //       })
  //       .catch((error) => console.error(error));
  //   }

  function searchArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      // Check if string includes and makes it case insensitive
      if (arr[i].name.toLowerCase().includes(memeTemplate.toLowerCase())) {
        setTemplateUrl(arr[i].url);
        console.log(arr[i].url);
        break;
      } else if (i === arr.length - 1) {
        console.log('No such template');
      }
    }
  }

  // Search for template URL
  function SearchUrl(event) {
    SetMemeTemplate(event.currentTarget.value);
    // Get the templates
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
    fetchTemplates();
  }

  function CreateMeme({ templateUrl, topText, bottomText }) {
    // useEffect(
    //   (event) => {
    //     setTopText(event.currentTarget.value);
    //   },
    //   [topText],
    // );
    // Contains data to create meme
    const bodyData = {
      background: templateUrl,
      style: 'string',
      text_lines: [topText, bottomText],
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
    <div className="App">
      <label>
        Top text
        <input
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
            CreateMeme({ templateUrl, topText, bottomText });
          }}
        />
      </label>
      <label>
        Bottom text
        <input
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
            CreateMeme({ templateUrl, topText, bottomText });
          }}
        />
      </label>
      <label>
        Meme template
        <input
          value={memeTemplate}
          onChange={(event) => {
            SearchUrl(event);
            CreateMeme({ templateUrl, topText, bottomText });
          }}
        />
      </label>
      <img src={memeUrl} alt="Meme Template" data-test-id="meme-image" />
      <a href={memeUrl} download>
        Click to download
      </a>
    </div>
  );
}

export default App;
