GitHub wndows client - create local repo with .gitignore + .gitattribues

Open folder in Visual Studio Code

node + npm already installed
cmd

https://angular.io/docs/ts/latest/quickstart.html

app - folder
app.component.ts

main.ts - convension - stick to it

module loader - systemjs - look into...

mocked service

async, oninit

router, nav
http://stackoverflow.com/questions/34535163/angular-2-router-no-base-href-set


some styling

edited condition

github json map


let blogPost : BlogPost = {
                        id: element.name, 
                        title: title,
                        created: sameDate,
                        lastEdited: sameDate,
                        markdownContent: ''
                    };
                    
                    this.http
                        .get(element.download_url)
                        .toPromise()
                        .then(reponse => {
                            blogPost.markdownContent = reponse.text();
                        })
                        .catch(this.handleError);