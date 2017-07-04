const html = require('choo/html')
const themeListItem = require('components/themeListItem')
const Fairybread = require('fairybread')

function themeList(state, emit) {
  if (state.themesLoaded === false) {
    emit('getThemes')
  }
  const list = Object.keys(state.themes).map((name) => {
    if (state.themes[name].themeLoaded !== true) {
      emit('getSingle', {
        name: name,
        xmls: state.themes[name]
      })
    }
    return themeListItem([name, state.themes[name]], state, emit)
  })
  return html`
     <div class="theme_list ${styles()}">
     <div className="theme_item "><a className="fake" href="/create" ><h1>+ <br>Create a theme</h1></a></div>
      ${list}
     </div>
  `
  function styles() {
    const sheet = new Fairybread('local')
    sheet.add('', `
          min-height:263px;
        `)
    sheet.add('.theme_item', `
          width: 23%;
          padding:1em;
          min-width:250px;
          overflow:hidden;
          float:left;
        `)
    sheet.add('.fake', `
          min-height: 255px;
          min-width: 100%;
          position: relative;
          border: 1px solid;
          display: inline-block;
        `)
    sheet.add('.fake h1', `
          position: absolute;
          vertical-align: middle;
          width: 100%;
          left: 0px;
          text-align: center;
          top: 95px;
    `)
    sheet.add('.theme_item .actions', `
          color:white;
    `)

    sheet.render()
    return sheet.id
  }
}

module.exports = themeList