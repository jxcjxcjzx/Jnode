import subprocess 
import sys
import Asynchronous
from Asynchronous import workDone

# just a simple wrapper for original-exe files 
# cause in those files the url code can not be added 

EXEFILENAME = "D:\\User\\Documents\\GitHub\\Jnode\\main\\extension\\lightapp\\RealHtml\\tool_html2pic\\html2png.exe";

param = sys.argv[1].split(",");
url = param[0];
subprocess.Popen(EXEFILENAME+" "+url).wait();  # this has to be blocked 

# work done , send the message to manager 
workDone("1340");

# another way also blocked is using 
# import os 
# os.system(exeaddr)