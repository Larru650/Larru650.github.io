# Loading question sets or a specific answer and questions

To load a specific question set and answer set (which may not yet exist):

http://localhost:3000/?questionSetId=733bb11b-d17e-4fc5-9f6d-9ad3dbcf811b&answersId=jackie.chan

To clear a specific questionset and answerset (and view a list of question sets):

http://localhost:3000/#clear

# Switching Sites

In order to switch to different versions of the site, use:

```
sites/SwitchSites.ps1 -SourceSite homeprotect
```

To copy files back to a site:

```
sites/SwitchSites.ps1 -SourceSite homeprotect -CopyFromWebsite
```

## Note

- Only files that exist in e.g. `sites/homeprotect/` will be copied into and out of the website.
- Any new files that need to be site versioned need to be copied into the respective `sites` subdirectory.
- A `.files-to-be-deleted` file is created at each site path (e.g. `sites/homeprotect/.files-to-be-deleted`). This file should be committed.
- A `.site-source` is created at the root of the website (which again needs to be commited). This allows `SwitchSites.ps1` to know which site is in use.

# Prerequisites

Install nvm manually and specify `C:\ProgramData\nvm` as the install location.
Use node 10.23.2 (LTS) (run as Administrator):

```
   nvm install 10.23.2
   nvm use 10.23.2
   node -v
```

There are three "per environment" configuration files:

- `package.json`
- `src/configuration.js`
- `server\configuration.js`

For each file, there is a version for `Developer`, `LocalIIS` and `Octopus`.

The default configuration checked in should always have configuration for `Developer` in the two files.

When you run `npm run build-dev-release` (described below), the two configuration files will be modified. _Do not commit these changes_

## Build and Test

These are the ways the project can be run and how it's done:

### Developer mode

```
ConfigManager.ps1 -RunNpmStart
```

Browse at:

- http://localhost:3000/
- http://localhost:3001/api/healthcheck

### Run the project in a local Docker container

```
.\Run-DockerDev.ps1
.\Run-DockerDev.ps1 -NoBuild
```

Both commands will attempt to run the container locally (`NoBuild` will not build the container first).

Browse at:

- https://localhost:3000/
- https://localhost:3000/api/healthcheck

## Docker in Azure

To run the container, first ensure that:

- `namespace` values in `./draft.toml` are correct.
- `ingress->host` value in `./values.yaml` is correct.
  Then run the following command:

```
./Run-DockerInAzureDev.ps1
```

### Debug the post-build command

```
npm run test-postbuild
```

This is the script that tidies up the Docker container and deployed IIS release after being build.

## About

The seed project was created uing npx (to install as Administrator):

```
   npm install -g npx
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problems

If you get

```
   /bin/sh: 1: ./container-setup.sh: not found
```

when trying to run your Docker image, this means your container-setup.sh file has its encoding incorrect.

The easiest way to fix is to install Windows Subsystem for Linux (WSL) and then run from the command line:

```
   dos2unix ./container-setup.sh
```
