export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
      }

    handle() {
        const { pathname }  = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
          document.querySelector('#app').innerHTML = html
          this.changeBackground()
        })
      }

      changeBackground() {
        const {pathname} = window.location;
        const page = document.querySelector("body");
        let currentBackground;
      
        switch (pathname) {
            case "/":
                currentBackground = "./assets/mountains-universe-1.png";
                break;
            case "/universe":
                currentBackground = "./assets/mountains-universe02.png";
                break;
            case "/exploration":
                currentBackground = "./assets/mountains-universe-3.png";
                break;
        }
      
        page.style.setProperty("background-image", `url(${currentBackground})`);
      }
}

