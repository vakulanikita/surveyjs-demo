// https://github.com/surveyjs/survey-library/blob/master/src/localization/english.ts
// https://surveyjs.io/form-library/examples/survey-localization/jquery#content-code

// демка с номером страницы
// https://surveyjs.io/form-library/examples/external-form-navigation-system/jquery#content-code

// кастомные controls
// https://surveyjs.io/form-library/examples/external-form-navigation-system/reactjs#content-code

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby4XFsWZJgNMFTfFCbFzq1vWYPxl_QWlf4hO9eYj4x6wy_1KlQld5w10rUdBRiFW9AS/exec'

const theme = {
  themeName: 'default',
  colorPalette: 'light',
  isPanelless: false,
  backgroundImage: '',
  backgroundOpacity: 1,
  backgroundImageAttachment: 'scroll',
  backgroundImageFit: 'cover',
  cssVariables: {
    '--font-family': 'Montserrat',
    '--sjs-corner-radius': '4px',
    '--sjs-base-unit': '8px',
    '--sjs-shadow-small': '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-shadow-inner': 'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-border-default': 'rgba(0, 0, 0, 0.16)',
    '--sjs-border-light': 'rgba(0, 0, 0, 0.09)',
    '--sjs-general-backcolor': 'rgba(255, 255, 255, 1)',
    '--sjs-general-backcolor-dark': 'rgba(248, 248, 248, 1)',
    '--sjs-general-backcolor-dim-light': 'rgba(249, 249, 249, 1)',
    '--sjs-general-backcolor-dim-dark': 'rgba(243, 243, 243, 1)',
    '--sjs-general-forecolor': 'rgba(0, 0, 0, 0.91)',
    '--sjs-general-forecolor-light': 'rgba(0, 0, 0, 0.45)',
    '--sjs-general-dim-forecolor': 'rgba(0, 0, 0, 0.91)',
    '--sjs-general-dim-forecolor-light': 'rgba(0, 0, 0, 0.45)',
    '--sjs-secondary-backcolor': 'rgba(255, 152, 20, 1)',
    '--sjs-secondary-backcolor-light': 'rgba(255, 152, 20, 0.1)',
    '--sjs-secondary-backcolor-semi-light': 'rgba(255, 152, 20, 0.25)',
    '--sjs-secondary-forecolor': 'rgba(255, 255, 255, 1)',
    '--sjs-secondary-forecolor-light': 'rgba(255, 255, 255, 0.25)',
    '--sjs-shadow-small-reset': '0px 0px 0px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-shadow-medium': '0px 2px 6px 0px rgba(0, 0, 0, 0.1)',
    '--sjs-shadow-large': '0px 8px 16px 0px rgba(0, 0, 0, 0.1)',
    '--sjs-shadow-inner-reset': 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0.15)',
    '--sjs-border-inside': 'rgba(0, 0, 0, 0.16)',
    '--sjs-special-red-forecolor': 'rgba(255, 255, 255, 1)',
    '--sjs-special-green': 'rgba(25, 179, 148, 1)',
    '--sjs-special-green-light': 'rgba(25, 179, 148, 0.1)',
    '--sjs-special-green-forecolor': 'rgba(255, 255, 255, 1)',
    '--sjs-special-blue': 'rgba(67, 127, 217, 1)',
    '--sjs-special-blue-light': 'rgba(67, 127, 217, 0.1)',
    '--sjs-special-blue-forecolor': 'rgba(255, 255, 255, 1)',
    '--sjs-special-yellow': 'rgba(255, 152, 20, 1)',
    '--sjs-special-yellow-light': 'rgba(255, 152, 20, 0.1)',
    '--sjs-special-yellow-forecolor': 'rgba(255, 255, 255, 1)',
    '--sjs-article-font-xx-large-textDecoration': 'none',
    '--sjs-article-font-xx-large-fontWeight': '700',
    '--sjs-article-font-xx-large-fontStyle': 'normal',
    '--sjs-article-font-xx-large-fontStretch': 'normal',
    '--sjs-article-font-xx-large-letterSpacing': '0',
    '--sjs-article-font-xx-large-lineHeight': '64px',
    '--sjs-article-font-xx-large-paragraphIndent': '0px',
    '--sjs-article-font-xx-large-textCase': 'none',
    '--sjs-article-font-x-large-textDecoration': 'none',
    '--sjs-article-font-x-large-fontWeight': '700',
    '--sjs-article-font-x-large-fontStyle': 'normal',
    '--sjs-article-font-x-large-fontStretch': 'normal',
    '--sjs-article-font-x-large-letterSpacing': '0',
    '--sjs-article-font-x-large-lineHeight': '56px',
    '--sjs-article-font-x-large-paragraphIndent': '0px',
    '--sjs-article-font-x-large-textCase': 'none',
    '--sjs-article-font-large-textDecoration': 'none',
    '--sjs-article-font-large-fontWeight': '700',
    '--sjs-article-font-large-fontStyle': 'normal',
    '--sjs-article-font-large-fontStretch': 'normal',
    '--sjs-article-font-large-letterSpacing': '0',
    '--sjs-article-font-large-lineHeight': '40px',
    '--sjs-article-font-large-paragraphIndent': '0px',
    '--sjs-article-font-large-textCase': 'none',
    '--sjs-article-font-medium-textDecoration': 'none',
    '--sjs-article-font-medium-fontWeight': '700',
    '--sjs-article-font-medium-fontStyle': 'normal',
    '--sjs-article-font-medium-fontStretch': 'normal',
    '--sjs-article-font-medium-letterSpacing': '0',
    '--sjs-article-font-medium-lineHeight': '32px',
    '--sjs-article-font-medium-paragraphIndent': '0px',
    '--sjs-article-font-medium-textCase': 'none',
    '--sjs-article-font-default-textDecoration': 'none',
    '--sjs-article-font-default-fontWeight': '400',
    '--sjs-article-font-default-fontStyle': 'normal',
    '--sjs-article-font-default-fontStretch': 'normal',
    '--sjs-article-font-default-letterSpacing': '0',
    '--sjs-article-font-default-lineHeight': '28px',
    '--sjs-article-font-default-paragraphIndent': '0px',
    '--sjs-article-font-default-textCase': 'none',
    '--sjs-general-backcolor-dim': 'rgba(255, 255, 255, 1)',
    '--sjs-primary-backcolor': '#833471',
    '--sjs-primary-backcolor-dark': 'rgba(20, 164, 139, 1)',
    '--sjs-primary-backcolor-light': 'rgba(25, 179, 148, 0.1)',
    '--sjs-primary-forecolor': 'rgba(255, 255, 255, 1)',
    '--sjs-primary-forecolor-light': 'rgba(255, 255, 255, 0.25)',
    '--sjs-special-red': 'rgba(229, 10, 62, 1)',
    '--sjs-special-red-light': 'rgba(229, 10, 62, 0.1)',
  },
  headerView: 'basic',
}

const engLocale = Survey.surveyLocalization.locales['en']
engLocale.requiredError = 'Обязательное поле'
engLocale.otherItemText = 'Другое'
// Response required: enter another value.
engLocale.otherRequiredError = 'Заполните поле "Другое"'
// Please enter a valid e-mail address.
engLocale.invalidEmail = 'Введите, пожалуйста, корретный e-mail'

const choices = [
  { value: 2, text: 'Телеграм' },
  { value: 3, text: 'Tелефон' },
  { value: 4, text: 'Skype' },
  { value: 5, text: 'Whatsapp' },
  { value: 1, text: 'Почта' },
]

const surveyJson = {
  pages: [
    {
      elements: [
        {
          type: 'html',
          html: '<h4 class="welcomeH4">Хотите максимально использовать наш продукт?</h4> <span class="welcomeSpan">Ответьте на несколько вопросов, чтобы мы могли предложить наиболее эффективные решения и улучшить наш сервис для ваших целей и задач.</span>',
        },
      ],
    },
    {
      name: 'slide1',
      elements: [
        {
          type: 'panel',
          name: 'data',
          title: 'Ваши данные',
          elements: [
            {
              type: 'text',
              name: 'name',
              title: 'Имя',
              isRequired: true,
              maxLength: 25,
            },
            {
              type: 'text',
              name: 'email',
              inputType: 'email',
              title: 'Почта',
              isRequired: true,
              maxLength: 25,
              startWithNewLine: false,
            },
          ],
        },
        {
          type: 'panel',
          name: 'connectionPanel',
          title: 'Предпочитаемый вид связи',
          elements: [
            {
              type: 'radiogroup',
              name: 'connection',
              titleLocation: 'hidden',
              // choices: ['Телеграм', 'Tелефон', 'Skype', 'Whatsapp', 'Почта'],
              choices: choices,
              isRequired: true,
              colCount: 3,
              // validators: [
              //   {
              //     type: 'answercount',
              //     maxCount: 1,
              //   },
              // ],
              showNoneItem: false,
              showOtherItem: false,
              showSelectAllItem: false,
              // separateSpecialChoices: true,
              // storeOthersAsComment: true,
              // hasComment: true,
            },
            {
              type: 'text',
              isRequired: true,
              name: 'connectionComment',
              titleLocation: 'hidden',
              placeholder: 'Ваш номер/логин',
              visibleIf: '{connection} >= 2',
              maxLength: 100,
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'businessArea',
          title: 'Сфера бизнеса',
          choices: [
            'Маркетинг',
            'Электронная коммерция',
            'Розничная торговля',
            'Технологии и ПО',
            'Финансы',
          ],
          isRequired: true,
          showOtherItem: true,
          colCount: 3,
          separateSpecialChoices: true,
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'employees',
          title: 'Количество сотрудников в компании',
          choices: ['1-10', '11-100', '101-500', '501-1000', 'Более 1000'],
          isRequired: true,
          colCount: 3,
        },
      ],
    },
    {
      elements: [
        {
          type: 'checkbox',
          name: 'information',
          title:
            'Какую информацию вы планируете собирать с помощью нашего сервиса?',
          choices: [
            'Мониторинг поисковой выдачи',
            'Анализ конкурентов',
            'Описание и цены на товары',
            'Рейтинги и отзывы',
            'Контактные данные',
            'Данные социальных сетей',
            'Данные недвижимости',
            'Вакансии и резюме',
            'Новости',
          ],
          isRequired: true,
          showOtherItem: true,
          colCount: 3,
          // https://github.com/surveyjs/survey-library/issues/8521
          maxLength: 100,
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'volume',
          title: 'Какой объем данных вы планируете собирать?',
          choices: [
            'Менее 1000 запросов',
            'От 1000 до 100000 запросов',
            'Более 100000 запросов',
          ],
          isRequired: true,
          colCount: 1,
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'frequency',
          title: 'Как часто вы планируете пользоваться нашим сервисом?',
          choices: [
            'Ежедневно',
            'Еженедельно',
            'Ежемесячно',
            'По мере необходимости',
          ],
          isRequired: true,
          colCount: 1,
        },
      ],
    },
    {
      elements: [
        {
          type: 'radiogroup',
          name: 'api',
          title: 'Есть ли у вас опыт работы с API?',
          choices: ['Да', 'Нет'],
          isRequired: true,
          colCount: 1,
          maxLength: 300,
        },
      ],
    },
    {
      elements: [
        {
          type: 'comment',
          name: 'instruments',
          title: 'Какие инструменты вы используете в настоящее время',
          isRequired: true,
          maxLength: 300,
        },
      ],
    },
    {
      elements: [
        {
          type: 'comment',
          name: 'goals',
          title: 'Какие цели вы ожидаете достигнуть с помощью нашего сервиса',
          isRequired: true,
          maxLength: 300,
        },
      ],
    },
  ],
  showQuestionNumbers: 'off',
  pageNextText: 'Далее',
  completeText: 'Далее',
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: 'Начать',
  // completedHtml: 'Thank you for your feedback!',
  showCompletedPage: false,
  showProgressBar: 'belowHeader',
  progressBarType: 'pages',
  progressBarShowPageNumbers: false,
  progressBarShowPageTitles: false,
  // showPreviewBeforeComplete: "showAnsweredQuestions"
  questionTitlePattern: 'numTitle',
}

// const engLocale = surveyLocalization.locales["en"];
// // Override individual translations
// engLocale.pagePrevText = "Back";
// engLocale.pageNextText = "Forward";

const survey = new Survey.Model(surveyJson)

survey.applyTheme(theme)

function displayResults(sender) {
  const results = JSON.stringify(sender.data, null, 4)
  document.querySelector('#surveyResults').textContent = results
  document.querySelector('#resultsContainer').style.display = 'block'
}

// survey.onComplete.add(displayResults)
survey.onComplete.add(function (sender, options) {
  console.log(sender.data)
  const results = sender.data

  // const example = {
  //   name: '123',
  //   connection: 'Телеграм',
  //   connectionComment: '@nikitavakula',
  //   email: 'nik@bk.ru',
  //   businessArea: 'мыловарня',
  //   'businessArea-Comment': 'мыловарня',
  //   employees: '1-10',
  //   information:
  //     'Рейтинги и отзывы, Данные недвижимости, другое: что-то другое',
  //   'information-Comment': 'что-то другое',
  //   volume: 'Более 100000 запросов',
  //   frequency: 'По мере необходимости',
  //   api: 'Нет',
  //   instruments: 'Какие инструменты',
  //   goals: 'Какие цели',
  // }

  if (results.businessArea === 'other') {
    results.businessArea = results['businessArea-Comment']
  }

  if (results.information.includes('other')) {
    results.information[results.information.length - 1] =
      'другое: ' + results['information-Comment']
  }

  results.information = results.information.join(', ')

  results.connection = choices.find(
    (item) => item.value === results.connection
  ).text

  let query = ''

  for (const prop in results) {
    if (prop === 'businessArea-Comment' || prop === 'information-Comment')
      continue

    query += prop + '=' + encodeURI(results[prop] || '') + '&'
    // results.information.join(', ')
  }

  fetch(`${GOOGLE_SCRIPT_URL}?${query}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })

  $('.finishScreen').removeClass('hide')
})

// survey.onValueChanged.add(() => {
//   console.log('onValueChanged')
// })
survey.onStarted.add(function (survey) {
  // старт квиза
  // console.log(survey)
})

// вывод на каждой новой странице
survey.onCurrentPageChanged.add(function (survey) {
  // console.log(survey.data)
})

$(function () {
  $('#surveyContainer').Survey({ model: survey })
})

// popup
jQuery(document).ready(function ($) {
  //open popup
  $('.cd-popup-trigger').on('click', function (event) {
    event.preventDefault()
    $('.cd-popup').addClass('is-visible')
  })

  //close popup
  $('.cd-popup').on('click', function (event) {
    if (
      $(event.target).is('.cd-popup-close') ||
      $(event.target).is('.cd-popup')
    ) {
      event.preventDefault()
      $(this).removeClass('is-visible')
    }
  })
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible')
    }
  })
})
