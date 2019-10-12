#!/bin/bash
rm dist.tar.gz
scp root@thothbe:/root/dist.tar.gz ./
tar -zxvf dist.tar.gz
rm  -rf /usr/local/nginx/html/*
mv -f dist/* /usr/local/nginx/html/
rm dist.tar.gz
rm -rf dist
IP=`ip addr | grep inet|grep -v 127.0.0.1| grep -v inet6|awk '{print $2}'|tr -d "addr:"| sed "s/\/24//g"`
echo $IP
sed -i "s/localhost/$IP/g" /usr/local/nginx/html/index.html
