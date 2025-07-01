const WORDS_DATABASE = [
  // 1-20 слов из 500
  {
    word: "abandon",
    transcription: "/əˈbændən/",
    translation: "покидать, оставлять",
    example: "They had to abandon the car because of the snowstorm.",
    exampleTranslation: "Им пришлось бросить машину из-за снежной бури."
  },
  {
    word: "ability",
    transcription: "/əˈbɪləti/",
    translation: "способность",
    example: "She has the ability to solve complex problems quickly.",
    exampleTranslation: "Она имеет способность быстро решать сложные проблемы."
  },
  {
    word: "able",
    transcription: "/ˈeɪbəl/",
    translation: "способный",
    example: "Will you be able to come to the meeting tomorrow?",
    exampleTranslation: "Ты сможешь прийти на встречу завтра?"
  },
  {
    word: "about",
    transcription: "/əˈbaʊt/",
    translation: "о, вокруг, приблизительно",
    example: "What are you talking about?",
    exampleTranslation: "О чем ты говоришь?"
  },
  {
    word: "above",
    transcription: "/əˈbʌv/",
    translation: "над, выше",
    example: "The temperature was above freezing all day.",
    exampleTranslation: "Температура была выше нуля весь день."
  },
  {
    word: "abroad",
    transcription: "/əˈbrɔːd/",
    translation: "за границей",
    example: "She's currently studying abroad in Spain.",
    exampleTranslation: "Сейчас она учится за границей в Испании."
  },
  {
    word: "absence",
    transcription: "/ˈæbsəns/",
    translation: "отсутствие",
    example: "His absence from school was noticed immediately.",
    exampleTranslation: "Его отсутствие в школе заметили сразу."
  },
  {
    word: "absent",
    transcription: "/ˈæbsənt/",
    translation: "отсутствующий",
    example: "Three students were absent from class today.",
    exampleTranslation: "Трое учеников отсутствовали на занятиях сегодня."
  },
  {
    word: "absolute",
    transcription: "/ˈæbsəluːt/",
    translation: "абсолютный",
    example: "She has absolute trust in her doctor.",
    exampleTranslation: "Она абсолютно доверяет своему врачу."
  },
  {
    word: "absorb",
    transcription: "/əbˈsɔːrb/",
    translation: "впитывать, поглощать",
    example: "The sponge absorbed all the water.",
    exampleTranslation: "Губка впитала всю воду."
  },
  // Продолжение списка...
  {
    word: "academic",
    transcription: "/ˌækəˈdemɪk/",
    translation: "академический",
    example: "He spent his life in academic research.",
    exampleTranslation: "Он провел свою жизнь в академических исследованиях."
  },
  {
    word: "accept",
    transcription: "/əkˈsept/",
    translation: "принимать, соглашаться",
    example: "I gladly accept your invitation.",
    exampleTranslation: "Я с радостью принимаю ваше приглашение."
  },
  {
    word: "access",
    transcription: "/ˈækses/",
    translation: "доступ",
    example: "Students have access to the library 24 hours a day.",
    exampleTranslation: "Студенты имеют доступ к библиотеке 24 часа в сутки."
  },
  {
    word: "accident",
    transcription: "/ˈæksɪdənt/",
    translation: "несчастный случай",
    example: "He was injured in a car accident.",
    exampleTranslation: "Он получил травму в автомобильной аварии."
  },
  {
    word: "accompany",
    transcription: "/əˈkʌmpəni/",
    translation: "сопровождать",
    example: "May I accompany you to the party?",
    exampleTranslation: "Можно мне сопроводить вас на вечеринку?"
  },
  {
    word: "accomplish",
    transcription: "/əˈkʌmplɪʃ/",
    translation: "выполнять, достигать",
    example: "We accomplished all our goals for the year.",
    exampleTranslation: "Мы достигли всех наших целей за год."
  },
  {
    word: "according",
    transcription: "/əˈkɔːrdɪŋ/",
    translation: "согласно",
    example: "According to the weather forecast, it will rain tomorrow.",
    exampleTranslation: "Согласно прогнозу погоды, завтра будет дождь."
  },
  {
    word: "account",
    transcription: "/əˈkaʊnt/",
    translation: "счет, отчет",
    example: "I need to check my bank account balance.",
    exampleTranslation: "Мне нужно проверить баланс моего банковского счета."
  },
  {
    word: "accurate",
    transcription: "/ˈækjərət/",
    translation: "точный",
    example: "The witness gave an accurate description of the suspect.",
    exampleTranslation: "Свидетель дал точное описание подозреваемого."
  },
  {
    word: "accuse",
    transcription: "/əˈkjuːz/",
    translation: "обвинять",
    example: "He was accused of stealing the money.",
    exampleTranslation: "Его обвинили в краже денег."
  },
  // Продолжение списка...
  {
    word: "achieve",
    transcription: "/əˈtʃiːv/",
    translation: "достигать",
    example: "She worked hard to achieve her dreams.",
    exampleTranslation: "Она усердно работала, чтобы достичь своих мечт."
  },
  {
    word: "acid",
    transcription: "/ˈæsɪd/",
    translation: "кислота",
    example: "The scientist tested the liquid for acid.",
    exampleTranslation: "Ученый проверил жидкость на кислоту."
  },
  {
    word: "acknowledge",
    transcription: "/əkˈnɒlɪdʒ/",
    translation: "признавать",
    example: "He acknowledged his mistake and apologized.",
    exampleTranslation: "Он признал свою ошибку и извинился."
  },
  {
    word: "acquire",
    transcription: "/əˈkwaɪər/",
    translation: "приобретать",
    example: "She acquired a new skill during the training.",
    exampleTranslation: "Она приобрела новый навык во время тренинга."
  },
  {
    word: "across",
    transcription: "/əˈkrɒs/",
    translation: "через, поперек",
    example: "There's a bridge across the river.",
    exampleTranslation: "Через реку есть мост."
  },
  {
    word: "act",
    transcription: "/ækt/",
    translation: "действовать, поступок",
    example: "We must act quickly to solve this problem.",
    exampleTranslation: "Мы должны действовать быстро, чтобы решить эту проблему."
  },
  {
    word: "action",
    transcription: "/ˈækʃən/",
    translation: "действие",
    example: "The police took immediate action.",
    exampleTranslation: "Полиция предприняла немедленные действия."
  },
  {
    word: "active",
    transcription: "/ˈæktɪv/",
    translation: "активный",
    example: "She maintains an active lifestyle.",
    exampleTranslation: "Она ведет активный образ жизни."
  },
  {
    word: "activity",
    transcription: "/ækˈtɪvəti/",
    translation: "деятельность",
    example: "The volcano showed signs of activity.",
    exampleTranslation: "Вулкан проявлял признаки активности."
  },
  {
    word: "actor",
    transcription: "/ˈæktər/",
    translation: "актер",
    example: "He's a famous Hollywood actor.",
    exampleTranslation: "Он известный голливудский актер."
  },
  // Продолжение списка...
  {
    word: "actual",
    transcription: "/ˈæktʃuəl/",
    translation: "фактический, реальный",
    example: "The actual cost was higher than we expected.",
    exampleTranslation: "Фактическая стоимость была выше, чем мы ожидали."
  },
  {
    word: "adapt",
    transcription: "/əˈdæpt/",
    translation: "адаптироваться",
    example: "It took time to adapt to the new environment.",
    exampleTranslation: "Потребовалось время, чтобы адаптироваться к новой среде."
  },
  {
    word: "add",
    transcription: "/æd/",
    translation: "добавлять",
    example: "Add some sugar to your coffee.",
    exampleTranslation: "Добавьте немного сахара в кофе."
  },
  {
    word: "addition",
    transcription: "/əˈdɪʃən/",
    translation: "добавление, сложение",
    example: "The new employee is a welcome addition to our team.",
    exampleTranslation: "Новый сотрудник - желанное дополнение к нашей команде."
  },
  {
    word: "additional",
    transcription: "/əˈdɪʃənəl/",
    translation: "дополнительный",
    example: "We need additional information to proceed.",
    exampleTranslation: "Нам нужна дополнительная информация для продолжения."
  },
  {
    word: "address",
    transcription: "/əˈdres/",
    translation: "адрес, обращаться",
    example: "Please write your address clearly.",
    exampleTranslation: "Пожалуйста, напишите ваш адрес разборчиво."
  },
  {
    word: "adequate",
    transcription: "/ˈædɪkwət/",
    translation: "адекватный, достаточный",
    example: "The food was adequate but not exceptional.",
    exampleTranslation: "Еда была достаточной, но не исключительной."
  },
  {
    word: "adjust",
    transcription: "/əˈdʒʌst/",
    translation: "настраивать, регулировать",
    example: "It takes time to adjust to a new time zone.",
    exampleTranslation: "Требуется время, чтобы адаптироваться к новому часовому поясу."
  },
  {
    word: "administration",
    transcription: "/ədˌmɪnɪˈstreɪʃən/",
    translation: "администрация",
    example: "The school administration made a new policy.",
    exampleTranslation: "Администрация школы ввела новую политику."
  },
  {
    word: "admire",
    transcription: "/ədˈmaɪər/",
    translation: "восхищаться",
    example: "I admire her dedication to the project.",
    exampleTranslation: "Я восхищаюсь ее преданностью проекту."
  },
  // Продолжение списка...
  {
    word: "admit",
    transcription: "/ədˈmɪt/",
    translation: "признавать, допускать",
    example: "He admitted his mistake honestly.",
    exampleTranslation: "Он честно признал свою ошибку."
  },
  {
    word: "adult",
    transcription: "/ˈædʌlt/",
    translation: "взрослый",
    example: "Adult tickets cost more than children's.",
    exampleTranslation: "Билеты для взрослых стоят дороже, чем детские."
  },
  {
    word: "advance",
    transcription: "/ədˈvɑːns/",
    translation: "продвигаться, аванс",
    example: "Medical science has advanced greatly.",
    exampleTranslation: "Медицинская наука значительно продвинулась вперед."
  },
  {
    word: "advantage",
    transcription: "/ədˈvɑːntɪdʒ/",
    translation: "преимущество",
    example: "Being tall is an advantage in basketball.",
    exampleTranslation: "Высокий рост - преимущество в баскетболе."
  },
  {
    word: "adventure",
    transcription: "/ədˈventʃər/",
    translation: "приключение",
    example: "Our trip to Africa was a real adventure.",
    exampleTranslation: "Наша поездка в Африку была настоящим приключением."
  },
  {
    word: "advice",
    transcription: "/ədˈvaɪs/",
    translation: "совет",
    example: "Can you give me some advice about this problem?",
    exampleTranslation: "Можешь дать мне совет по этой проблеме?"
  },
  {
    word: "affect",
    transcription: "/əˈfekt/",
    translation: "влиять",
    example: "The weather affects my mood.",
    exampleTranslation: "Погода влияет на мое настроение."
  },
  {
    word: "afford",
    transcription: "/əˈfɔːrd/",
    translation: "позволять себе",
    example: "We can't afford a new car right now.",
    exampleTranslation: "Сейчас мы не можем позволить себе новую машину."
  },
  {
    word: "afraid",
    transcription: "/əˈfreɪd/",
    translation: "испуганный",
    example: "She's afraid of spiders.",
    exampleTranslation: "Она боится пауков."
  },
  {
    word: "after",
    transcription: "/ˈɑːftər/",
    translation: "после",
    example: "We'll discuss this after lunch.",
    exampleTranslation: "Мы обсудим это после обеда."
  }
  // Остальные слова до 500...
];

// Получаем случайное слово из локальной базы
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS_DATABASE.length);
  return WORDS_DATABASE[randomIndex];
}

// Остальные функции остаются без изменений
function displayWord(wordObj) {
  document.getElementById('word').textContent = wordObj.word;
  document.getElementById('transcription').textContent = wordObj.transcription;
  document.getElementById('translation').textContent = wordObj.translation;
  document.getElementById('example').textContent = wordObj.example;
  document.getElementById('exampleTranslation').textContent = wordObj.exampleTranslation || '';
}

function getDictionary() {
  const dict = localStorage.getItem('englishDictionary');
  return dict ? JSON.parse(dict) : [];
}

function addToDictionary(wordObj) {
  const dict = getDictionary();
  if (!dict.some(item => item.word === wordObj.word)) {
    dict.push(wordObj);
    localStorage.setItem('englishDictionary', JSON.stringify(dict));
    alert(`"${wordObj.word}" добавлено в словарь!`);
  } else {
    alert(`"${wordObj.word}" уже есть в словаре!`);
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  let currentWord = getRandomWord();
  displayWord(currentWord);

  document.getElementById('new-word').addEventListener('click', () => {
    currentWord = getRandomWord();
    displayWord(currentWord);
  });

  document.getElementById('add-to-dict').addEventListener('click', () => {
    addToDictionary(currentWord);
  });

  document.getElementById('open-dict').addEventListener('click', () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('dictionary/dictionary.html') });
  });
});