@echo OFF
Powershell.exe -command "if (!(Test-Path nodejs)) { Invoke-WebRequest https://nodejs.org/dist/v18.13.0/node-v18.13.0-win-x64.zip -OutFile node.zip; Expand-Archive -Path node.zip -DestinationPath nodejs;Remove-Item node.zip;Rename-Item -Path 'nodejs/node-v18.13.0-win-x64' -NewName 'nodejs';}nodejs/nodejs/npm.cmd install;nodejs/nodejs/node.exe index.js;"
pause