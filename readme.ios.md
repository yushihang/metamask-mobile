```console

gem install bundler
METAMASK_BUILD_TYPE='main' METAMASK_ENVIRONMENT='local' IOS_SIMULATOR="iPhone 15 Pro Max" yarn watch:clean

#new terminal

command -v pod && bundle exec pod install --project-directory=ios --repo-update

METAMASK_BUILD_TYPE='main' METAMASK_ENVIRONMENT='local' IOS_SIMULATOR="iPhone 15 Pro Max" yarn setup
METAMASK_BUILD_TYPE='main' METAMASK_ENVIRONMENT='local' IOS_SIMULATOR="iPhone 15 Pro Max" yarn start:ios
```
