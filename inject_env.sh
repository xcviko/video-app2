#!/bin/bash

cd /var/www/client/

search='<script src="./env.js" type="text/javascript"></script>'
sed 's/^[[:space:]]*\/\/.*$//g' env.js > tmp.js
replace=`tr '\n' ' ' < tmp.js`
replace="<script>$replace</script>"

sed "s|$search|$replace|" index.html.orig > index.html

