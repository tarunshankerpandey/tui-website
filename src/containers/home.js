const html = require('choo/html')
const header = require('components/header')
const themeList = require('components/themeList')

function mainView(state, emit) {
  return html`
    <body>
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <div class="container" >
        ${header(state, emit)}
        ${themeList(state, emit)}
      </div>
      <style>
       @media only screen and (max-width: 500px) {
          .theme_list {
            overflow:hidden;
            text-align:center;
          }
          .theme_list .theme_item {
            display:inline-block;
            float:none !important;
            min-width:80% !important;
            width:auto !important;
          }
        }
        html {
            overflow: scroll;
            overflow-x: hidden;
        }
        ::-webkit-scrollbar {
            width: 0px;  /* remove scrollbar space */
            background: transparent;  /* optional: just make scrollbar invisible */
        }
        /* optional: show position indicator in red */
        ::-webkit-scrollbar-thumb {
        }
      </style>
    </body>
  `
}

module.exports = mainView