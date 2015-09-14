#!/usr/bin/env bash

rm -rf resources/public/js
lein with-profile -dev,+uberjar cljsbuild once
cp -r resources/public/* ipfs
lein cljsbuild once
