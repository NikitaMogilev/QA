#!/bin/bash
touch $1.txt
exec 1>$1.txt
for (( i=1; i <= $2; i++ ))
do
echo "number is $i">>$1.txt
done
