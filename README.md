# DON'T FORGET YOUR .ENV FILE!!! ###

### Other things to remember ##

The following are my notes on how this stack is set up.

Note that this is a complete rebuilding of the backend since installing a new copy of Windows 10.  Since that time Mongodb has deprecated the "mongo" command and replaced it with "mongosh"

WSL2 Ubuntu 20.04 (Focal)

    INSTALLED:
        Git
        Nvm
        Nodejs
        Npm
        Mongodb

As of 2024:
To solve the MongoDB install problem: fix path
$ sudo mkdir -p /data/db
$ sudo chown -R `whoami` /data/db

    for removal:
        https://stackoverflow.com/questions/62495999/installing-mongodb-in-wsl

    11/13/2023 - Could not configure helmet because Colt did not provide code snippet. in lesson #584, minute 3:25
