#!bin/sh
for file in ./*.js
do
    all_name=`basename $file .js`
    uglifyjs $all_name.js -m  -o ./lib/$all_name.min.js
    echo $all_name ......ok
done
