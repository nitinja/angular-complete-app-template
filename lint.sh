#!/bin/bash
# Does all Linting in one command
echo "********* Running: TSLint *********" 
ng lint daily-progress-report --fix
echo " "
echo "********* Running: StyleLint **********" 
npm run lint:css
