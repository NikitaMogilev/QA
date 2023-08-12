#!/bin/bash 

echo "3.Зайти в папку"
cd homework_1
echo "4. Создать 3 папки"
mkdir holder{1..3}
echo "5.Зайти в любоую папку"
cd holder1
echo "6.Создать 5 файлов (3 txt, 2 json)"
touch 1.txt 2.txt 3.txt 4.json 5.json
echo "7.Создать 3 папки"
mkdir holder1_{1..3}
echo "8.Вывести список содержимого папки"
ls -la
echo "13.переместить любые 2 файла, которые вы создали, в любую другую папку."
mv holder1/1.txt holder1/2.txt holder2
