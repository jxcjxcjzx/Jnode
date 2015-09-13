tcpdump use 
==

the common use of tcpdump :

	./tcpdump -i any -p -s 0 -w /sdcard/capture.pcap 
	-i any  -- listen on any network interface 
	-p --  disable promiscuous mode 
	-s 0 --  capture thje entire packet
	-w --- write packet to ... 