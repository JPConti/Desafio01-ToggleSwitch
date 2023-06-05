function app() {
  let toggle = document.querySelector(".input-switcher")
  let input = document.querySelector(".switcher")
  let body = document.querySelector("body")
  let toggleColor = toggle.style
  let themeColor = body.style
  let toggleOn = 0 
  let theme

  let darkTheme = () => {
      toggleColor.backgroundColor = "var(--light)";
      themeColor.backgroundColor = "var(--dark)";
      themeColor.color = "var(--light)";
      theme = "dark"
      input.value = 0
      localStorage.setItem("pageTheme", JSON.stringify(theme))
  }

  let lightTheme = () => {
      toggleColor.backgroundColor = "var(--dark)";
      themeColor.backgroundColor = "var(--light)";
      themeColor.color = "var(--dark)";
      theme = "light"
      input.value = 1
      localStorage.setItem("pageTheme", JSON.stringify(theme))
  }

  themeSwitch = () => {
      if(toggleOn == 0) {
          toggleOn = 1
      }else {
          toggleOn = 0
      }

      let active = toggleOn ?  darkTheme() : lightTheme();
  }

  let getTheme = JSON.parse(localStorage.getItem("pageTheme"))

  if(getTheme == "dark") {
      darkTheme()
      toggleOn = 1
  }
}

app()