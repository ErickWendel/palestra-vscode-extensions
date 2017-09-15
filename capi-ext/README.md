## Building VSCode Extensions with TypeScript

## Details
- Show  in `status bar` the  Recurrence  of `Erick` words in text
## Runing
- On VSCode, run `F5`

## Publishing
- Personal Access Token: [Get a Personal Access Token](https://code.visualstudio.com/docs/extensions/publish-extension#_get-a-personal-access-token)

```
vsce create-publisher capivara

# Questions on terminal
#Publisher human-friendly name: (capivara) 
#E-mail: YOUR_VISUALSTUDIO_EMAIL
#Personal Access Token: YOUR_VISUALSTUDIO_TOKEN

vsce login capivara
vsce publish -p token #OR
vsce publish minor

vsce unpublish capivara.capi-ext
delete-publisher capivara
```
## Description
### Author
 - [Erick Wendel](http://erickwendel.com.br)
 - [capivara.codes](http://capivara.codes)
 - [presentation](http://)
