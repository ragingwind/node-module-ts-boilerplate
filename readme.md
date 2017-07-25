# node-module-boilerplate-with-ts

> Boilerplate for node module with TS

## Install

```
$ curl -fsSL https://github.com/ragingwind/node-module-boilerplate-with-ts/archive/master.tar.gz | tar -xz --strip-components=2 node-module-boilerplate-with-ts-master/boilerplate
```

Alternatively you can `git clone` or [download](https://github.com/ragingwind/node-module-boilerplate-with-ts/archive/master.zip) this repo and get contents of the `boilerplate` folder.

## Make it works

You can use template tools on CLI to make the boilerplate to be real. My recommendation is that use [lodash.template-cli](https://www.npmjs.com/package/lodash.template-cli). See how it works

```
# install templating tool to global
npm install -g lodash.template-cli

# make a dest path
mkdir dist

# run tpl command with boilerplate content
tpl ./boilerplate/**/* ./dist -- --camelModuleName=ModuleName --moduleName=modulename --githubUsername=github --name=name --email=email --website=website

# copy .dotfiles your path
cp .* ./dist/boilerplate
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
