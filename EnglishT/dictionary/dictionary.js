document.addEventListener('DOMContentLoaded', () => {
  const dictionaryList = document.getElementById('dictionary-list');
  const dict = JSON.parse(localStorage.getItem('englishDictionary') || []);
  
  if (dict.length === 0) {
    dictionaryList.innerHTML = '<p class="empty-message">Your dictionary is empty. Add words from the extension popup.</p>';
  } else {
    dict.forEach(word => {
      const wordElement = document.createElement('div');
      wordElement.className = 'word-item';
      wordElement.innerHTML = `
        <div class="word">${word.word}</div>
        <div class="transcription">${word.transcription}</div>
        <div class="translation">${word.translation}</div>
        <div class="example-section">
          <div class="example-label">Example:</div>
          <div class="example">${word.example}</div>
          <div class="example-translation">${word.exampleTranslation || ''}</div>
        </div>
      `;
      dictionaryList.appendChild(wordElement);
    });
  }
  
  document.getElementById('back-button').addEventListener('click', () => {
    window.close();
  });
});