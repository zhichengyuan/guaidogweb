all:
	npm run build
	-rm dist.tar.gz
	tar -zcvf dist.tar.gz dist
	-ssh root@thothbe "rm /root/dist.tar.gz"
	scp dist.tar.gz root@thothbe:/root/

