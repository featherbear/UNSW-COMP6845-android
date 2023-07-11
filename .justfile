@_default:
  just --list

# First-time initialisation
@init:
  rm -rf base dist node_modules
  git clone https://github.com/featherbear/UNSW-COMP6845-base base
  yarn --cwd base
  yarn

# Listen to source changes
@watch:
  yarn gulp watch

# Start dev server (listen to source changes)
@start:
  yarn gulp

# Build dist release
@build:
  rm -rf dist
  yarn gulp copy
  yarn --cwd base build
  mv base/dist ./dist