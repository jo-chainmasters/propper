/**
* JetBrains Space Automation
* This Kotlin script file lets you automate build activities
* For more info, see https://www.jetbrains.com/help/space/automation.html
*/

job("Hello World!") {
    container(displayName = "Say Hello", image = "node:current-alpine") {
      shellScript {
        content = """
        	npm install
        	./node_modules/@angular/cli/bin/ng.js build
        """
        }
    }
}
