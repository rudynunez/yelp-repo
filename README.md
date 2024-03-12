### DON'T FORGET YOUR .ENV FILE!!! ###

The following are my notes on how this stack is set up.

Note that this is a complete rebuilding of the backend since installing a new copy of Windows 10.  Since that time Mongodb has deprecated the "mongo" command and replaced it with "mongosh"

WSL2 Ubuntu Focal

    INSTALLED:
        Git
        Nvm
        Nodejs
        Npm
        Mongodb 6.0

Mongodb was problematic to install. Here are links which helped me:

    https://stackoverflow.com/questions/7948789/mongod-complains-that-there-is-no-data-db-folder

    for removal:
        https://stackoverflow.com/questions/62495999/installing-mongodb-in-wsl

    11/13/2023 - Could not configure helmet because Colt did not provide code snippet. in lesson #584, minute 3:25
