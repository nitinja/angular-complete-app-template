#!/bin/bash
# Does all Linting in one command
echo "********* Running: TSLint *********" 
ng lint angular-seed-app --fix
echo " "
echo "********* Running: StyleLint **********" 
npm run lint:css
